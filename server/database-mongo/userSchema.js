var mongoose = require('mongoose');

var user = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    min: 5,
    max: 255
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    min: 5,
    max: 255
  }
});

var User = mongoose.model('User', user);


module.exports =  User;