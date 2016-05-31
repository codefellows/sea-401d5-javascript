'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = new mongoose.Schema({
  username: {type: String, required: true}, 
  password: {type: String, required: true}
});

User.methods.hashPassword = function() {
  return bcrypt.hashSync(this.password, 8);
};

module.exports = mongoose.model('user', User);
