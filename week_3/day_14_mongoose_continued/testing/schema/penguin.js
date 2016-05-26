'use strict';

const mongoose = require('mongoose');

const Penguin = mongoose.Schema({
  name: String,
  sealHunter: Boolean,
  sealsKilled: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('penguin', Penguin);
