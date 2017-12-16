var express = require('express');
var router = express.Router();
var moment = require('moment');

var predictionServer = require('../server/predictionServer/predictionServer');
var fRSPredictionServer = require('../server/predictionServer/fRSPredictionServer');
var cADPredictionServer = require('../server/predictionServer/cADPredictionServer');

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
router.post('/getAllPredictionsByUserId', function (req, res, next) {
    let userId = req.body.userId;
    let conditions = {};
    conditions['userId'] = userId;
    predictionServer.getPredictions(conditions, function (err, docs) {
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
    let updateDoc = {};
    updateDoc['followUpInfo'] = followUpInfo;
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
});


/**
 * Framinghan Risk Score
 */
/**
 * 添加新的记录
 */
router.post('/insertFRSPrediction', function (req, res, next) {
    var prediction = req.body.prediction;
    let timeNow = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
    prediction.createTime = timeNow;
    prediction.lastUpdateTime = timeNow;
    fRSPredictionServer.insertFRSPrediction(prediction, function (err, doc) {
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
router.post('/getAllFRSPredictionsByUserId', function (req, res, next) {
    let userId = req.body.userId;
    let conditions = {};
    conditions['userId'] = userId;
    fRSPredictionServer.getFRSPredictions(conditions, function (err, docs) {
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


/**
 * Coronary Artery Disease
 */
/**
 * 添加新的记录
 */
router.post('/insertCADPrediction', function (req, res, next) {
    var prediction = req.body.prediction;
    let timeNow = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
    prediction.createTime = timeNow;
    prediction.lastUpdateTime = timeNow;
    cADPredictionServer.insertCADPrediction(prediction, function (err, doc) {
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
router.post('/getAllCADPredictionsByUserId', function (req, res, next) {
    let userId = req.body.userId;
    let conditions = {};
    conditions['userId'] = userId;
    cADPredictionServer.getCADPredictions(conditions, function (err, docs) {
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

module.exports = router; 