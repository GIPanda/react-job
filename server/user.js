const express = require('express');
const Router = express.Router();
const models = require('./model');
const User = models.getModel('user');

Router.get('/list', function(req, res) {
  User.find({}, function(err, doc) {
    return res.json(doc);
  })
})
Router.post('/register', function(req, res) {
  const {user, pwd, role} = req.body;
  User.findOne({name: user}, function(err, doc) {
    if (doc) {
      return res.json({code: 1, msg: 'User already exists'});
    }
    User.create({name: user, pwd, role}, function(e, d) {
      if (e) {
        return res.json({code: 1, msg: 'Backend error'})
      }

      return res.json({code: 0});
    })
  })
})
Router.get('/info', function(req, res) {
  return res.json({code: 0})
})

module.exports = Router;
