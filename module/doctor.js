var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * 定义doctor对象模型
 */
var doctorSchema = new Schema({
    name: String,
    idNumber: String,
    jobNumber: String,
    jobTitle: String,
    hospitalId: String,
    password: String,
    email: String,
    phoneNumber: String
});

module.exports = mongoose.model('doctor', doctorSchema);