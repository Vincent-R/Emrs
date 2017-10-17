var mongoose = require('mongoose');
var db_url = require('./config').db_url;

/**
 * 连接
 */
connect = function () {
    mongoose.connect(db_url, { useMongoClient: true });
}

/**
 * 断开连接
 */
disconnect = function () {
    mongoose.disconnect();
}

/**
 * 连接成功
 */
mongoose.connection.on('connected', function () {
    console.log('Mongoose connection open to ' + db_url);
});

/**
 * 连接异常
 */
mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
});

/**
 * 连接断开
 */
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose connection disconnected');
});

module.exports = {
    connect: connect,
    disconnect: disconnect,
};