var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');

var index = require('./routes/index');

var mongoose = require('./dbConnection');
var checkUserLogin = require('./middlewares/checkLogin');

var app = express();

mongoose.connect();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//支持跨域
app.use(cors());

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
//获取post请求的参数时需要这个模块
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());
//静态文件呈现
app.use(express.static(path.join(__dirname, 'public')));

//自定义中间件，在所有http请求时都会调用，中间件是顺序执行的，next()表示执行下一个中间件，next(data)中可以添加参数，在下一个中间件中取同样的名称就可以获取传递的参数
//没有挂载的中间件，所有http请求都会调用
// app.use(function(req, res, next){
//   console.log('自定义中间件');
//   next();//调取下一个中间件，如果没有这个，http请求将被挂起，不会返回任何信息
// });

//app.use(checkUserLogin.checkUserLogin(req, res, next));

//匹配http请求路由，如果匹配上就会执行中间件里的函数，最终会返回信息。
//同时执行的函数中不会包含有next(),所以下面的404报错中间件将不会执行，如果没有匹配上，将会调用404中间件
app.use('/', index);
//app.use('/user', user);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;//Not Found
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
