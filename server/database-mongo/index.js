var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function () {
  console.log('mongoose connection error');
});

db.once('open', function () {
  console.log('mongoose connected successfully');
});
// step 1 111111111111111111111111111111111111
// user data  and trick data
var user = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    min: 6,
    max: 255
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 255
  }
});

var trick = mongoose.Schema({
  trickName: {
    type: String,
    required: true,
    min: 6,
    max: 255
  },
  photo: String,
  video: String,
  description: String,
});
// capital User
var User = mongoose.model('User', user);
var Trick = mongoose.model('Trick', trick);

// var selectAll = function(callback){
//   User.find({}, function(err, items){
//     if(err) {
//       callback(err,null);
//     } else {
//       callback(null, items);
//     }
//   });
// };


module.exports = { User, Trick }