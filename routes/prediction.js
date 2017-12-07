var express = require('express');
var router = express.Router();
var moment = require('moment');

var predictionServer = require('../server/predictionServer');

/**
 * 添加新的记录
 */
router.post('/insertPrediction', function (req, res, next) {
    var prediction = req.body.prediction;
    let timeNow = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
    prediction.createTime = timeNow;
    prediction.lastUpdateTime = timeNow;
    predictionServer.insertPrediction(prediction, function (err, doc) {
        if (err) {
            res.json({
                status: false,
                message: '添加记录失败！',
                data: err
            });
        } else {
            res.json({
                status: true,
                message: '',
                data: ''
            });
        }
    })
});

/**
 * 查询获取所有记录
 */
router.post('/getAllPredictions', function (req, res, next) {
    predictionServer.getAllPrediction(function (err, docs) {
        if (err) {
            res.json({
                status: false,
                message: '获取失败！',
                data: ''
            });
        } else {
            res.json({
                status: true,
                message: '',
                data: docs
            });
        }
    });
});


router.post('/updatePrediction', function (req, res, next) {
    let predictionId = req.body.predictionId;
    let followUpInfo = req.body.followUpInfo;
    predictionServer.getPredictionById(predictionId, function (err, doc) {
        if (err) {
            res.json({
                status: false,
                message: '获取失败！',
                data: ''
            });
        } else {
            let updateDoc = {};
            let followUpInfoArray = doc.followUpInfo;
            followUpInfoArray.push(followUpInfo);
            updateDoc['followUpInfo'] = followUpInfoArray;
            predictionServer.updatePredictionById(predictionId, updateDoc, function (updateErr, updateDoc) {
                if (updateErr) {
                    res.json({
                        status: false,
                        message: '更新失败！',
                        data: ''
                    });
                } else {
                    res.json({
                        status: true,
                        message: '更新成功！',
                        data: ''
                    });
                }
            });
        }
    });
});

module.exports = router; 