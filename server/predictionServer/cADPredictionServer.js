/**
 * 访问cADPrediction对象模型
 */
var cADPredictionDao = require('../../module/prediction/cADPrediction');

/**
 * cADPrediction CRUD
 */
exports.getCADPredictions = function (conditions, callBack) {
    cADPredictionDao.find(conditions, function (err, docs) {
        //docs:查询到的数据
        callBack(err, docs);
    });
}

exports.insertCADPrediction = function (prediction, callBack) {
    cADPredictionDao.create(prediction, function (err) {
        //err:如果执行没有错误，err为null
        callBack(err);
    });
}

exports.getCADPredictionById = function (id, callBack) {
    cADPredictionDao.findById(id, function (err, doc) {
        //err:如果执行没有错误，err为null
        callBack(err, doc);
    });
}