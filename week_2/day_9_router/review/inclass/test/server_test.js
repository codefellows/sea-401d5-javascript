'use strict';

const fs = require('fs');
const chai = require('chai');
const chaiHTTP = require('chai-http');
const expect = chai.expect;
chai.use(chaiHTTP);
const request = chai.request;
require('../server');

describe('server tests', () => {
  let dirLength;
  before((done) => {
    fs.readdir(__dirname + '/../data', (err, data) => {
      if (err) throw err;
      dirLength = data.length;
      done();
    });
  });

  it('should get a list of files', (done) => {
    request('localhost:3000')
      .get('/note')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        expect(res).to.have.header('Content-Type', 'application/json');
        expect(Array.isArray(res.body));
        done();
      });
  });

  it('should create a file', (done) => {
      request('localhost:3000')
        .post('/note')
        .send({'message':'test'})
        .end((err, res) => {
          expect(err).to.eql(null);
          expect(res).to.have.status(200);
          fs.readdir(__dirname + '/../data', (err, data) => {
            let fileName = data.length - 1 + '.json';
            expect(data.indexOf(fileName)).to.not.eql(-1);
            done();
          });
        });
    });
});





