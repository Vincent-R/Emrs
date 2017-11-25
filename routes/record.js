var express = require('express');
var router = express.Router();
var emptyMr = require('../resource/record');

var recordServer = require('../server/recordServer');

/**
 * 添加新的记录
 */
router.post('/insertRecord', function (req, res, next) {
    var record = req.body;
    recordServer.insertRecord(record, function (err, doc) {
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
router.post('/getAllRecords', function (req, res, next) {
    recordServer.getAllRecords(function (err, docs) {
        if (err) {
            res.json({
                status: false,
                message: '获取病历记录失败！',
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
 * 获取病历，或者是获取空的病历
 */
router.post('/getRecord', function (req, res, next) {
    if (req.body.recordId) {
        var recordId = req.body.recordId;
        recordServer.getRecordById(recordId, function (err, doc) {
            if (err) {
                res.json({
                    status: false,
                    message: '获取病历记录失败！',
                    data: ''
                });
            } else if (doc) {
                res.json({
                    status: true,
                    message: '',
                    data: doc
                });
            } else {
                res.json({
                    status: false,
                    message: '未查询到数据！',
                    data: ''
                });
            }
        });
    } else {
        res.json({
            status: true,
            message: '',
            data: emptyMr
        });
    }
});

/**
 * 查询所有病历的部分记录
 */
router.post('/getPartOfAllRecords', function (req, res, next) {
    recordServer.getPartOfRecords(function (err, docs) {
        if (err) {
            res.json({
                status: false,
                message: '获取病历记录失败！',
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