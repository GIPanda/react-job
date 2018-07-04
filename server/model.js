const mongoose = require('mongoose');

// conncet to mongodb
const DB_URL = 'mongodb://127.0.0.1:27017/imooc';
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function(){
  console.log('mongo connect success');
});
