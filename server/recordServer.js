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

//查询所有的医疗记录
exports.getAllRecords = function (callBack) {
    recordDao.find({}, function (err, docs) {
        //docs:查询到的数据
        callBack(err, docs);
    });
}

//根据id查询病历记录
exports.getRecordById = function (id, callBack) {
    recordDao.findById(id, function (err, doc) {
        //docs:查询到的数据
        callBack(err, doc);
    });
}

//查询所有记录的部分字段
exports.getPartOfRecords = function (sort, page_index, page_size, callBack) {
    var query = recordDao.find({});
    query.select('_id basicInfo.name basicInfo.gender basicInfo.age basicInfo.telephone basicInfo.cellphone1 basicInfo.cellphone2 basicInfo.medicalCardNum basicInfo.idNum basicInfo.admissionNum basicInfo.bedNum basicInfo.doctor');
    query.sort(sort);
    query.skip(parseInt(page_index * page_size));
    query.limit(parseInt(page_size));
    query.exec(function (err, docs) {
        callBack(err, docs)
    });
}

//查询所有记录数量
exports.getAllRecordsCount = function (callBack) {
    var query = recordDao.find({});
    query.count(function (err, count) {
        callBack(err, count)
    });
}
