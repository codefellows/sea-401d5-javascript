const mongoose  = require('mongoose');
const bcrypt    = require('bcrypt');
const jwt       = require('jsonwebtoken');

const User = new mongoose.Schema({
  username: String,
  password: String
});

//User.methods is mongoose's version of the prototype. Methods
//stored there are available to us on instances of that schema.
User.methods.hashPassword = function() {
  //hashSync takes a string (this is the instance of User here) and
  //generates a hash from it. The first argument is the string to
  //hash and the second is the amount of times it 'salts' it.
  return bcrypt.hashSync(this.password, 8);
};

User.methods.comparePassword = function(password) {
  //Since hashing is a one way process in order to compare
  //our passwords we hash the incoming password and
  //compare it to the stored one.
  return bcrypt.compareSync(password, this.password);
};

User.methods.generateToken = function() {
  //jwt.sign encrypts an object, so that later we can use this object
  //to find our user. It uses our app secret to encrypt and decrypt
  //the token.
  return jwt.sign({_id: this._id}, process.env.SECRET || 'changeme');
};

module.exports = mongoose.model('user', User);
