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
exports.getPartOfRecords = function (callBack) {
    recordDao.aggregate({$project: {
        _id: 1, 
        name: '$basicInfo.name',
        gender: '$basicInfo.gender',
        age: '$basicInfo.age',
        telephone: '$basicInfo.telephone',
        cellphone1: '$basicInfo.cellphone1',
        cellphone2: '$basicInfo.cellphone2',
        medicalCardNum: '$basicInfo.medicalCardNum',
        idNum: '$basicInfo.idNum',
        admissionNum: '$basicInfo.admissionNum',
        bedNum: '$basicInfo.bedNum',
        doctor: '$basicInfo.doctor'
    }}, function (err, docs) {
        //docs:查询到的数据
        callBack(err, docs);
    });
}
