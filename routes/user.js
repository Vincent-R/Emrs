var express = require('express');
var router = express.Router();
var doctorServer = require('../server/doctorServer');
var _ = require('lodash');

/**
 * 插入医生数据
 */
router.post('/insertDoctor', function (req, res, next) {
  var doctor = JSON.parse(req.body.doctor);
  doctorServer.checkDoctorByPhoneAndEmail(doctor.phoneNumber, doctor.email, function (err, doc) {
    if (err) {
      res.json({
        status: false,
        message: '加入新医生失败！',
        data: ''
      });
    } else {
      if (doc) {
        res.json({
          status: false,
          message: '医生账户已经存在！',
          data: ''
        });
      } else {
        doctorServer.insertDoctor(doctor, function (err) {
          if (err) {
            res.json({
              status: false,
              message: '加入新医生失败！',
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
  doctorServer.getDoctorByPhoneOrEmail(phoneOrEmail, function (err, doc) {
    if (err) {
      res.json({
        status: false,
        message: '获取医生数据失败！',
        data: ''
      });
    } else {
      if (doc) {
        if (_.isEqual(doc.password, password)) {
          res.json({
            status: true,
            message: '',
            data: doc._id
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
  doctorServer.getAllDoctor(function (err, docs) {
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
  doctorServer.getAllDoctorIdAndName(function (err, docs) {
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
router.post('/deleteDoctorById', function (req, res, next) {
  var doctorId = req.body.doctorId;
  doctorServer.deleteDoctorById(doctorId, function (err, doc) {
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
