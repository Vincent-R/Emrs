/**
 * 访问Record对象模型
 */
var recordDao = require('../module/record');

/**
 * record CRUD
 */
exports.insertRecord = function (record, callBack) {
    recordDao.create(record, function (err) {
        //err:如果执行没有错误，err为null
        callBack(err);
    });
}

exports.getAllRecords = function (callBack) {
    recordDao.find({}, function (err, docs) {
        //docs:查询到的数据
        callBack(err, docs);
    });
}

exports.getRecordById = function (id, callBack) {
    recordDao.findById(id, function (err, doc) {
        //docs:查询到的数据
        callBack(err, doc);
    });
}
