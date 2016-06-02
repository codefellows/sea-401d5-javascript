'use strict';
const expect    = require('chai').expect;
const basicHttp = require('../lib/basic_http');
const jwtAuth   = require('../lib/auth_middleware');
const User      = require('../schema/user');
const jwt       = require('jsonwebtoken');
const mongoose  = require('mongoose');

mongoose.connect('mongodb://localhost/test_db');

const secret    = process.env.SECRET = 'test';

describe('Middleware tests', () => {
  after((done) => {
    mongoose.connection.db.dropDatabase(() => {
      done();
    });
  });

  describe('basic http', () => {
    it('should parse basic auth', (done) => {
      let authorization = makeAuthString('test:test');
      let req = {headers:{authorization}};
      let res = {};

      basicHttp(req, res, function() {
        expect(req.auth.username).to.eql('test');
        expect(req.auth.password).to.eql('test');
        done();
      });
    });

    it('should error for no password', (done) => {
      let authorization = makeAuthString('test:');
      let req = {headers:{authorization}};
      let res = {};

      basicHttp(req, res, function(error) {
        if (!error) throw new Error('Didn\'t error');
        expect((error).message).to.eql('Username or Password Empty');
        done();
      });
    });
  });

  describe('token parser', () => {
    let testId;

    before((done) => {
      let newUser = new User({username: 'test', password: 'test'});
      newUser.save((err, user) => {
        if (err) throw err;
        testId = user._id;
        done();
      });
    });

    it('should accept a valid token', (done) => {
      let token = jwt.sign({_id: testId}, secret);
      let req   = {headers:{token}};

      jwtAuth(req, null, function() {
        expect(req.user._id).to.eql(testId);
        done();
      });
    });

    it('should error on invalid token', (done) => {
      let token = jwt.sign({_id: 'not there'}, secret);
      let req   = {headers:{token}};

      jwtAuth(req, null, function(error) {
        console.log( error);
        expect(error.message).to.eql('authentication failure');
      })
    });
  });
});

function makeAuthString(str) {
  let baseString = (new Buffer(str, 'utf8')).toString('base64');

  return`Basic ${baseString}`;
}