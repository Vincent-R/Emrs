var log4js = require('log4js');
var path = require('path');
var log_path = require('../config').origin_path;

configureMyLog = function () {
    log4js.configure({
        appenders: { uRLog: { type: 'file', filename: path.join(log_path, 'logs/uRLog.log')}},
        categories: { default: { appenders: ['uRLog'], level: 'error' } }
      });
}

getMyLogger = function (loggerName) {
    return log4js.getLogger(loggerName);
}

module.exports = {
    configureMyLog: configureMyLog,
    getMyLogger: getMyLogger 
}
