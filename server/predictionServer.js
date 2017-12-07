/**
 * 访问prediction对象模型
 */
var predictionDao = require('../module/prediction');

/**
 * prediction CRUD
 */
exports.getAllPrediction = function (callBack) {
    predictionDao.find({}, function (err, docs) {
        //docs:查询到的数据
        callBack(err, docs);
    });
}

exports.insertPrediction = function (prediction, callBack) {
    predictionDao.create(prediction, function (err) {
        //err:如果执行没有错误，err为null
        callBack(err);
    });
}