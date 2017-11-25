var _ = require('lodash');
var doctorServer = require('../server/userServer');

/**
 * 检查用户是否登录
 */
checkUserLogin = function (req, res, next) {
    const user_id = req.session.user_id;
    if (_.isNull(user_id) || _.isEmpty(user_id)) {
        res.json({
            status: false,
            message: '您还未登录！',
            data: ''
        });
        return;
    } else {
        doctorServer.getDoctorById(user_id, function (err, docs) {
            if (err) {
                res.json({
                    status: false,
                    message: '查询用户失败',
                    data: ''
                });
                return;
            } else if (!docs) {
                res.json({
                    status: false,
                    message: '用户不存在',
                    data: ''
                });
                return;
            }
        });
    }
    next()
}

module.exports = {
    checkUserLogin
}