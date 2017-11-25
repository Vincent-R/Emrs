var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * 定义user对象模型
 */
var userSchema = new Schema({
    name: String,
    idNumber: String,
    jobNumber: String,
    jobTitle: String,
    hospitalId: String,
    password: String,
    email: String,
    phoneNumber: String,
    type: String
});

module.exports = mongoose.model('user', userSchema);