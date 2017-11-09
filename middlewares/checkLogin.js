/**
 * 检查用户是否登录
 */
checkUserLogin = function (req, res, next) {
    const user_id = req.session.user_id;
    if (!user_id || !Number(user_id)) {
        res.json({
            status: false,
            message: '您还未登录！',
            data: ''
        });
        return
    } else {
        // const admin = await AdminModel.findOne({ id: admin_id });
        let condition = true;
        if (condition) {
            res.json({
                status: false,
                message: '哈哈哈',
                data: ''
            });
            return
        }
    }
    next()
}

module.exports = {
    checkUserLogin
}