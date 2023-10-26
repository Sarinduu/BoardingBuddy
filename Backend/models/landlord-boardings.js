const mongoose = require('mongoose');

const boardingSchema = new mongoose.Schema({
  boardingLocation: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  userId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User' 
  },
  image:{
    type:String,
    required:true
  }
});

module.exports = mongoose.model('Boarding', boardingSchema);
