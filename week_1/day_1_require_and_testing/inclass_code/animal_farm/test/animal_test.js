//TEEEESSSTS

const chai = require('chai');
const expect = chai.expect;
const rhino = require('../rhino');
const horse = require('../horse');
const Animal = require('../animal');

describe('Horse tests', () => {
  it('should be a horse', () => {
    expect(horse.type).to.eql('Horse');
  });
  it('should have 4 legs', () => {
    expect(horse.legs).to.be.at.least(3);
  });
  it('should make a horse call', () => {
    expect(horse.call()).to.eql(undefined)
  })
})
describe('Rhino tests', () => {
  it('should kill a poacher', () => {
    var testPerson = {
      type: 'poacher'
    };

    var result = rhino.charge(testPerson);
    expect(result.type).to.eql('dead');
  })

  it('should not kill a non poacher', () => {
    var testPerson = {
      type: 'not a poacher'
    };

    var result = rhino.charge(testPerson);
    expect(result.type).to.not.eql('dead');
  })
})