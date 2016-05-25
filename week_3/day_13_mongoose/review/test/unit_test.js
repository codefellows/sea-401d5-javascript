'use strict';
const expect = require('chai').expect;
const fs = require('fs');
const jsonParser = require('../jsonParser');
process.env.TEST_MODE = true;

require('../server');


describe('json parser tests', () => {
  it('should read valid json', (done) => {
    let req = fs.createReadStream(__dirname + '/good_json.json');
    jsonParser(req, null, () => {
      expect(req.body.message).to.eql('test');
      done();
    });
  });

  it('should reject invalid json', (done) => {
    let req = fs.createReadStream(__dirname + '/bad_json.json');
    jsonParser(req, null, (err) => {
      expect(err.message).to.eql('invalid json');
      expect(err.statusCode).to.eql(422);
      done();
    });
  });

});