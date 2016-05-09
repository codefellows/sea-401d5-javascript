const chai = require('chai');
const expect = chai.expect;
const ourModule = require(__dirname + '/../module_assign');

describe('first test suite', () => {
  it('first chai test', () => {
    expect(true).to.not.eql(true);
  })
 it('should say "Hi from module"', () => {
  expect(ourModule()).to.eql('Hi from module');
 });
});
