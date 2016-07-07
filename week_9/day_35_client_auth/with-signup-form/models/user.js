const mongoose  = require('mongoose');
const bcrypt    = require('bcrypt');
const jwt       = require('jsonwebtoken');

const User = new mongoose.Schema({
  username: String,
  password: String
});

User.methods.hashPassword = function() {
  return bcrypt.hashSync(this.password, 8);
};

User.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

User.methods.generateToken = function() {
  return jwt.sign({_id: this._id}, process.env.SECRET || 'changeme');
};

module.exports = mongoose.model('user', User);
