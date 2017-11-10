/**
 * 访问Doctor对象模型
 */
var doctorDao = require('../module/doctor');

/**
 * doctor CRUD
 */
exports.insertDoctor = function (doctorSchema, callBack) {
    doctorDao.create(doctorSchema, function (err) {
        //err:如果执行没有错误，err为null
        callBack(err);
    });
}

//验证phone和email是否已经注册
exports.checkDoctorByPhoneAndEmail = function (phone, email, callBack) {
    doctorDao.findOne({ $or: [{ phoneNumber: phone }, { email: email }] }, function (err, docs) {
        //docs:查询到的数据
        callBack(err, docs);
    });
}

//根据phone或email查询医生，判断是否存在账户。登录时使用
exports.getDoctorByPhoneOrEmail = function (phoneOrEmail, callBack) {
    doctorDao.findOne({ $or: [{ phoneNumber: phoneOrEmail }, { email: phoneOrEmail }] }, function (err, docs) {
        //docs:查询到的数据
        callBack(err, docs);
    });
}

//根据id查询医生
exports.getDoctorById = function (id, callBack) {
    doctorDao.findById(id, function (err, docs) {
        //doc:查询到的数据
        callBack(err, docs);
    });
}

exports.getAllDoctor = function (callBack) {
    doctorDao.find({}, function (err, docs) {
        //docs:查询到的数据
        callBack(err, docs);
    });
}

exports.getAllDoctorIdAndName = function (callBack) {
    doctorDao.find({}, '_id name', function (err, docs) {
        callBack(err, docs);
    });
}

exports.deleteDoctorById = function (id, callBack) {
    doctorDao.findByIdAndRemove(id, function (err, doc) {
        //doc:删除结果以及影响的行数{'ok':1,'n':1}
        callBack(err, doc);
    });
}