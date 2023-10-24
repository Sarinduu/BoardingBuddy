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
  image: {
    type: String,
    required: true,
  },
  userId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User' // Replace 'User' with the actual name of the user model if different
  },
  tenants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User' // Replace 'User' with the actual name of the user model if different
  }]
});

module.exports = mongoose.model('Boarding', boardingSchema);
