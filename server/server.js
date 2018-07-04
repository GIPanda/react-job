const express = require('express');
const userRouter = require('./user.js');

//create app
const app = express()
app.use('/user', userRouter);

app.listen(9093, function(){
  console.log('Node app start at port 90993');
})
