exports = module.exports = {};

exports.type = 'Rhino';

exports.call = function() {
  console.log('don\'t poach me, bro');
};

exports.horns = 1;

exports.legs = 4;

exports.charge = function(person) {
  if (person.type === 'poacher') person.type = 'dead';
  return person;
};


debugger;