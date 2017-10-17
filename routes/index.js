var express = require('express');
var router = express.Router();

var user = require('./user');
var record = require('./record');
var emrsIndex = require('./emrsIndex');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Emrs' });
});

router.use('/user', user);
router.use('/record', record);
router.use('/index',emrsIndex);

module.exports = router;
