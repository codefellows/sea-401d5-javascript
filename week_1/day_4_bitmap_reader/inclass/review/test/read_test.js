'use strict'
const expect = require('chai').expect;
const reader = require('../async_read');
const fs = require('fs');

describe('file read tests', function() {
  let files;
  before((done) => {
    files = [];
    fs.readFile(__dirname + '/../one.txt', (err, data) => {

      files.push(data.slice(0, 8))
      fs.readFile(__dirname + '/../two.txt', (err, data) => {
        files.push(data.slice(0, 8))
        done();
      });
    });
  });

  it('should test async', (done) => {
    process.nextTick(() => {
      //throw new Error('async stuff')
      done();
    });
  });

  it('should read files in order', (done) => {
    reader((data) => {
      expect(data[0].toString()).to.eql(files[0].toString());
      done();
    });
  });

  it('should files', (done) => {
    reader((data) => {
      expect(data[0] instanceof Buffer).to.eql(true);
      done();
    });
  });

});




