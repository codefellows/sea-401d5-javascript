const mongoose = require('mongoose');

const Penguin = new mongoose.Schema({
  name: String,
  suit: {type: String, default: 'tuxedo'}
});

module.exports = mongoose.model('penguin', Penguin);
