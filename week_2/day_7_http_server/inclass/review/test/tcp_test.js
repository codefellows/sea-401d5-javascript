'use strict';
const expect = require('chai').expect;
const net = require('net');

require('../tcp_server');

describe('tcp tests', () => {
  it('should send a message to all clients except sender', (done) => {
    let result;
    let wroteBack = false;

    const clientOne = net.connect(3000, () => {
      clientOne.on('data', () => {
        wroteBack = true;
      });

      clientOne.write('TEST');
    });

    const clientTwo = net.connect(3000, () => {
      clientTwo.on('data', (data) => {
        result = data.toString();
      });
    });

    setTimeout(() => {
      expect(result).to.eql('TEST');
      expect(wroteBack).to.eql(false);
      done();
    }, 50)
  });
});
