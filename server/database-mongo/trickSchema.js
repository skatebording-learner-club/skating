var mongoose = require('mongoose');

var trick = mongoose.Schema({
    trickName: {
      type: String,
      required: true,
      min: 6,
      max: 255
    },
    photo: String,
    description: String,
  });
  // capital User
  var Trick = mongoose.model('Trick', trick);
 
  
  module.exports={Trick}   