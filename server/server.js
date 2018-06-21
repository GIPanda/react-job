const express = require('express');
const mongoose = require('mongoose');

// conncet to mongodb
const DB_URL = 'mongodb://127.0.0.1:27017/imooc';
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function(){
  console.log('mongo connect success');
});

// define document schema and model
const User = mongoose.model('user', new mongoose.Schema({
  name: {type: String, required: true},
  age: {type: Number, required: true}
}));

// create data
// User.create({
//   name: 'dongjie',
//   age: 12
// }, function(err, doc) {
//   if (!err) {
//     console.log(doc);
//   } else {
//     console.log(err);
//   }
// })
// User.remove({age: 18}, function(err, doc){
//   if (!err) {
//     console.log(doc);
//   } else {
//     console.log(err);
//   }
// })
User.update({'name':'dongjie'}, {'$set':{age:26}}, function(err, doc){
  if (!err) {
    console.log(doc);
  } else {
    console.log(err);
  }  
})

//create app
const app = express()

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
})

app.get('/data', function(req, res){
  User.findOne({name: 'dongjie'}, function(err, doc){
    res.json(doc);
  })
})

// app.

app.listen(9093, function(){
  console.log('Node app start at port 90993');
})