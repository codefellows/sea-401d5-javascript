const mongoose = require('mongoose');

const Note = new mongoose.Schema({
  body: String
});

module.exports = mongoose.model('note', Note);