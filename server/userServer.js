/**
 * 访问Doctor对象模型
 */
var userDao = require('../module/user');

/**
 * user insert
 */
exports.insertUser = function (userSchema, callBack) {
    userDao.create(userSchema, function (err) {
        //err:如果执行没有错误，err为null
        callBack(err);
    });
}

//验证phone和email是否已经注册
exports.checkUserByPhoneAndEmail = function (phone, email, callBack) {
    if (phone !== '') {
        userDao.findOne({ $or: [{ phoneNumber: phone }, { email: email }] }, function (err, docs) {
            //docs:查询到的数据
            callBack(err, docs);
        });
    } else {
        userDao.findOne({email: email }, function (err, docs) {
            //docs:查询到的数据
            callBack(err, docs);
        });
    }
}

//根据phone或email查询用户，判断是否存在账户。登录时使用
exports.getUserByPhoneOrEmail = function (phoneOrEmail, callBack) {
    userDao.findOne({ $or: [{ phoneNumber: phoneOrEmail }, { email: phoneOrEmail }] }, function (err, docs) {
        //docs:查询到的数据
        callBack(err, docs);
    });
}

//根据id查询用户
exports.getUserById = function (id, callBack) {
    userDao.findById(id, function (err, docs) {
        //doc:查询到的数据
        callBack(err, docs);
    });
}

exports.getAllDoctor = function (callBack) {
    userDao.find({type: '0'}, function (err, docs) {
        //docs:查询到的数据
        callBack(err, docs);
    });
}

exports.getAllDoctorIdAndName = function (callBack) {
    userDao.find({type: '0'}, '_id name', function (err, docs) {
        callBack(err, docs);
    });
}

exports.deleteUserById = function (id, callBack) {
    userDao.findByIdAndRemove(id, function (err, doc) {
        //doc:删除结果以及影响的行数{'ok':1,'n':1}
        callBack(err, doc);
    });
}