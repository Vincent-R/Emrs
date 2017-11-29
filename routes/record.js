var express = require('express');
var router = express.Router();
var emptyMr = require('../resource/record');
var moment = require('moment');

var recordServer = require('../server/recordServer');
var server_url = require('../config').server_url;

/**
 * 添加新的记录
 */
router.post('/insertRecord', function (req, res, next) {
    var record = req.body.record;
    let timeNow = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
    record.createTime = timeNow;
    record.lastUpdateTime = timeNow;
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
router.get('/getPartOfAllRecords', function (req, res, next) {
    let page_size = req.query.per_page;
    let page_index = req.query.page;
    let totalCount = 0;
    let totalPage = 0;
    let sort = {};
    let sort_str = '';
    if (req.query.sort) {
        sort_str = req.query.sort;
        let sort_arr = sort_str.split('|');
        let sort_order = 1;
        if ( sort_arr[1].toUpperCase() === 'DESC' ) {
            sort_order = -1;
        }
        sort['basicInfo.' + sort_arr[0]] = sort_order;
    }
    recordServer.getAllRecordsCount(function (errone, count) {
        if (errone) {
            res.json({
                status: false,
                message: '获取病历记录失败！',
                data: ''
            });
        } else {
            totalCount = count;
            totalPage = parseInt(totalCount/parseInt(page_size) + 1);
            recordServer.getPartOfRecords(sort, parseInt(page_index)-1, parseInt(page_size),
                function (err, docs) {
                    if (err) {
                        res.json({
                            status: false,
                            message: '获取病历记录失败！',
                            data: ''
                        });
                    } else {
                        let recordTo = page_index * page_size;
                        let next = page_index >= totalPage ? null : server_url + 'record/getPartOfAllRecords?sort=' + sort_str + '&page=' + (parseInt(page_index) + 1) + '&per_page=' + page_size;
                        let prev = page_index == 1 ? null : server_url + 'record/getPartOfAllRecords?sort=' + sort_str + '&page=' + (page_index - 1) + '&per_page=' + page_size;
                        res.json({
                            status: true,
                            message: '',
                            data: {
                                current_page: page_index,
                                data: docs,
                                from: (page_index - 1) * page_size + 1,
                                to: recordTo > totalCount ? totalCount : recordTo,
                                total: totalCount,
                                per_page: page_size,
                                last_page: totalPage,
                                next_page_url: next,
                                prev_page_url: prev
                            }
                        });
                    }
                }
            );
        }
    }); 
});

module.exports = router; 