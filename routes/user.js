var express = require('express');
var router = express.Router();
var userServer = require('../server/userServer');
var _ = require('lodash');
var md5=require("md5")  

/**
 * 插入新用户数据
 */
router.post('/insertUser', function (req, res, next) {
  var user = req.body;
  user.password = md5(user.password)
  userServer.checkUserByPhoneAndEmail(user.phoneNumber, user.email, function (err, doc) {
    if (err) {
      res.json({
        status: false,
        message: '加入新用户失败！',
        data: ''
      });
    } else {
      if (doc) {
        res.json({
          status: false,
          message: '用户已经存在！',
          data: ''
        });
      } else {
        userServer.insertUser(user, function (err) {
          if (err) {
            res.json({
              status: false,
              message: '加入新用户失败！',
              data: ''
            });
          } else {
            res.json({
              status: true,
              message: '',
              data: ''
            });
          }
        });
      }
    }
  });
});

/**
 * 根据手机号或者邮箱查找医生，用于登录验证
 */
router.post('/checkLogin', function (req, res, next) {
  var phoneOrEmail = req.body.phoneOrEmail;
  var password = req.body.password;
  userServer.getUserByPhoneOrEmail(phoneOrEmail, function (err, doc) {
    if (err) {
      res.json({
        status: false,
        message: '获取用户数据失败！',
        data: ''
      });
    } else {
      if (doc) {
        if (_.isEqual(doc.password, md5(password))) {
          res.json({
            status: true,
            message: '',
            data: doc
          });
        } else {
          res.json({
            status: false,
            message: '密码错误！',
            data: ''
          });
        }
      } else {
        res.json({
          status: false,
          message: '用户不存在！',
          data: ''
        });
      }
    }
  });
});

/**
 * 查询获取所有医生
 */
router.post('/getAllDoctor', function (req, res, next) {
  userServer.getAllDoctor(function (err, docs) {
    if (err) {
      res.json({
        status: false,
        message: '获取医生数据失败！',
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
 * 查询获取所有医生的id和name
 */
router.post('/getAllDoctorIdAndName', function (req, res, next) {
  userServer.getAllDoctorIdAndName(function (err, docs) {
    if (err) {
      res.json({
        status: false,
        message: '获取医生数据失败！',
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
 * 根据id删除医生数据
 */
router.post('/deleteUserById', function (req, res, next) {
  var doctorId = req.body.doctorId;
  userServer.deleteUserById(doctorId, function (err, doc) {
    if (err) {
      res.json({
        status: false,
        message: '删除医生数据失败！',
        data: ''
      });
    } else {
      //如果要删除的数据不存在，err不会显示错误。可以根据doc内的删除行数来判断是否存在要删除的数据
      res.json({
        status: true,
        message: '',
        data: '该医生数据已成功删除！'
      });
    }
  });
});

module.exports = router;
