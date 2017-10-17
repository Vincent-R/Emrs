/**
 * 访问emrsIndex对象模型
 */
var emrsIndexDao = require('../module/emrsIndex');

/**
 * emrsIndex CRUD
 */
exports.getIndex = function (callBack) {
    emrsIndexDao.findOne({}, function (err, doc) {
        //docs:查询到的数据
        callBack(err, doc);
    });
}

exports.insertIndex = function (indexSchema, callBack) {
    emrsIndexDao.create(indexSchema, function (err) {
        //err:如果执行没有错误，err为null
        callBack(err);
    });
}
