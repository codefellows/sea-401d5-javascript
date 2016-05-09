var Animal = exports = module.exports = function(type, legs, sound) {
  this.type = type;
  this.legs = legs;
  this.sound = sound;
};

Animal.prototype.call = function() {
  console.log(this.sound);
};
