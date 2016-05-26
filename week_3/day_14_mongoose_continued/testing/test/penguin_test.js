'use strict';

const chai = require('chai');
const chaiHTTP = require('chai-http');
const Penguin = require('../schema/penguin');
const mongoose = require('mongoose');
chai.use(chaiHTTP);

const expect = chai.expect;
const request = chai.request;
const dbPort = process.env.MONGOLAB_URI;

process.env.MONGOLAB_URI = 'mongodb://localhost/test_db';
require('../server');

describe('Penguin tests', () => {
  after((done)=> {
    process.env.MONGOLAB_URI = dbPort;
    mongoose.connection.db.dropDatabase(() => {
      done();
    });
  });

  it('should get a list of penguins', (done) => {
    request('localhost:3000')
      .get('/penguins/')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        expect(Array.isArray(res.body)).to.eql(true);
        done();
      });
  });

  it('should create a penguin', (done) => {
    request('localhost:3000')
      .post('/penguins/')
      .send({name: 'posty', sealHunter: false})
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        expect(res.body.name).to.eql('posty');
        expect(res.body).to.have.property('_id');
        expect(res.body.sealsKilled).to.eql(0);
        done();
      });
  });

  describe('tests that need data', () => {
    let testPenguin;
    beforeEach((done) => {
      let newPenguin = new Penguin({name: 'test', sealHunter: true});
      newPenguin.save((err, penguin) => {
        testPenguin = penguin;
        done();
      });
    });

    it('should update a penguin', (done) => {
      testPenguin.name = 'updated';

      request('localhost:3000')
        .put('/penguins/')
        .send(testPenguin)
        .end((err, res) => {
          expect(err).to.eql(null);
          expect(res).to.have.status(200);
          expect(res.body.message).to.eql('successfully updated');
          done();
        });
    });

    it('should delete a penguin', (done) => {
      request('localhost:3000')
        .delete('/penguins/' + testPenguin._id)
        .end((err, res) => {
          expect(err).to.eql(null);
          expect(res).to.have.status(200);
          expect(res.body.message).to.eql('successfully deleted');
          done();
        });
    });
  });
});

