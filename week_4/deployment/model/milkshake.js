'use strict';

const mongoose = require('mongoose');

const MilkShake = new mongoose.Schema({
  flavor: String,
  scoops: Number,
  milkRichness: String
});

module.exports = mongoose.model('milkshake', MilkShake);
