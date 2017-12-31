var express = require('express');
var router = express.Router();
var path = require('path');
var server_url = require('../config').server_url;

var exportServer = require('../server/exportServer');

/**
 * 添加新的记录
 */
router.post('/exportTest', function (req, res, next) {
    exportServer.exportWord(function(err, fileName){
        if (err) {
            res.json({
                status: false,
                message: '获取失败！',
                data: ''
            });
        } else {
            let downloadPath = server_url + 'export/' + fileName;
            res.json({
                status: true,
                message: '',
                data: downloadPath
            });
        }
    });
});

module.exports = router; 