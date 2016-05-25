const mongoose = require('mongoose');

//mongoose.Schema is a constructor that gives us an object to interact with
//a collection
const Penguin = new mongoose.Schema({
  name: String,
  suit: {type: String, default: 'tuxedo'}
});

//mongoose.model creates a collection of a given name in our db and uses our
//schema for reference
module.exports = mongoose.model('penguin', Penguin);
