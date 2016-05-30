'use strict';

const mongoose = require('mongoose');

const IceCream = new mongoose.Schema({
  flavor: String,
  scoops: Number,
  vessel: String
});

module.exports = mongoose.model('icecream', IceCream);
