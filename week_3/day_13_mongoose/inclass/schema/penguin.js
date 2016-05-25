'use strict';

const mongoose = require('mongoose');

const Penguin = new mongoose.Schema({
  name: String
});

module.exports = mongoose.model('penguin', Penguin);

