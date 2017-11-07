var express = require('express');
var router = express.Router();
var emrsIndexServer = require('../server/emrsIndexServer');

var emrsIndex = require('../resource/emrsIndex');

/**
 * 获取索引记录
 */
router.post('/getIndex', function (req, res, next) {
    emrsIndexServer.getIndex(function (err, docs) {
        if (err) {
            res.json({
                status: false,
                message: '获取索引数据失败！',
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

router.post('/insertIndex', function (req, res, next) {
    console.log(emrsIndex);
    emrsIndexServer.insertIndex(emrsIndex, function (err, docs) {
        if (err) {
            res.json({
                status: false,
                message: '添加数据失败！',
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