const mongoose = require('mongoose');

// conncet to mongodb
const DB_URL = 'mongodb://127.0.0.1:27017/react-job-chat';
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function(){
  console.log('mongo connect success');
});

const models = {
  user: {
    username: {type: String, require: true},
    pwd: {type: String, require: true},
    role: {type: String, require: true},
    avatar: {type: String},
    desc: {type: String},
    post: {type: String},
    // only for boss
    company: {type: String},
    salary: {type: String}
  },
  chat: {

  }
}

for (let m in models) {
  if (models.hasOwnProperty(m)) {
    mongoose.model(m, new mongoose.Schema(models[m]));
  }
}

module.exports = {
  getModel: function(name) {
    return mongoose.model(name);
  }
}
