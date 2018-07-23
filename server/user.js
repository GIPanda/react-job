const express = require('express');
const utils = require('utility');
const Router = express.Router();
const models = require('./model');
const User = models.getModel('user');
const doc_filter = {pwd: 0, __v:0}

Router.get('/list', function(req, res) {
  const { role } = req.query;
  // User.remove({}, function(e, d){});
  User.find({role}, function(err, doc) {
    return res.json({code: 0, data: doc});
  })
})
Router.post('/update', function(req, res) {
  const userid = req.cookies.userid;
  if(!userid) {
    return json.dumps({code: 1})
  }

  const body = req.body;
  User.findByIdAndUpdate(userid, body, function(err, doc) {
    const data = Object.assign({}, {
      username: doc.username,
      type: doc.type,
    }, body)

    return res.json({code: 0, data});
  })
})

Router.post('/login', function(req, res) {
  const {username, pwd} = req.body;
  User.findOne({username, pwd: md5Pwd(pwd)}, doc_filter, function(err, doc){
    if (!doc) {
      return res.json({code: 1, msg: 'Username or password error'});
    } else {
      res.cookie('userid', doc._id);
      return res.json({code: 0, data: doc});
    }
  })
})
Router.post('/register', function(req, res) {
  const {username, pwd, role} = req.body;
  User.findOne({username}, function(err, doc) {
    if (doc) {
      return res.json({code: 1, msg: 'User already exists'});
    }
    const userModel = new User({role, username, pwd:md5Pwd(pwd)});
    userModel.save(function(e, d){
      if (e) {
        return res.json({code: 1, msg: 'Backend error'})
      } else {
        const {username, type, _id} = d;
        res.cookie('userid', _id);
        return res.json({code: 0, data:{username, type, _id}});
      }
    })
  })
})
Router.get('/info', function(req, res) {
  const {userid} = req.cookies;
  if (!userid) {
    return res.json({code: 1})
  } else {
    User.findOne({_id: userid}, doc_filter, function(err, doc) {
      if (err || !doc) {
        return res.json({code: 1, msg: 'Backend error'});
      } else{
        return res.json({code: 0, data: doc});
      }
    })
  }
})

function md5Pwd(pwd) {
  const salt = 'react_job_salt_AT9#7:w[G)"264mF';
  return utils.md5(utils.md5(pwd + salt));
}

module.exports = Router;
