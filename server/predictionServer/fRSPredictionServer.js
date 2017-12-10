/**
 * 访问fRSPrediction对象模型
 */
var fRSPredictionDao = require('../../module/prediction/fRSPrediction');

/**
 * fRSPrediction CRUD
 */
exports.getFRSPredictions = function (conditions, callBack) {
    fRSPredictionDao.find(conditions, function (err, docs) {
        //docs:查询到的数据
        callBack(err, docs);
    });
}

exports.insertFRSPrediction = function (prediction, callBack) {
    fRSPredictionDao.create(prediction, function (err) {
        //err:如果执行没有错误，err为null
        callBack(err);
    });
}

exports.getFRSPredictionById = function (id, callBack) {
    fRSPredictionDao.findById(id, function (err, doc) {
        //err:如果执行没有错误，err为null
        callBack(err, doc);
    });
}