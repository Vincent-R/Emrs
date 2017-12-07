var express = require('express');
var router = express.Router();
var checkLogin = require('../middlewares/checkLogin');

var user = require('./user');
var record = require('./record');
var emrsIndex = require('./emrsIndex');
var prediction = require('./prediction');

/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Emrs' });
// });

// router.use('/*', function (req, res, next) {
//   console.log('test');
//   checkLogin.checkUserLogin(req, res, next);
// });

router.use('/user', user);
router.use('/record', record);
router.use('/index',emrsIndex);
router.use('/dp',prediction);

module.exports = router;
