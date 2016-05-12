'use strict';
const fs = require('fs');
const EventEmitter = require('events');
const ee = new EventEmitter();
var reader = module.exports = function(cb) {
  let files = [];
  fs.readFile(__dirname + '/one.txt', (err, data) => {
    files.push(data.slice(0, 8))
    ee.emit('read_next')
  });

  ee.on('read_next', () => {
    fs.readFile(__dirname + '/two.txt', (err, data) => {
      files.push(data.slice(0, 8))
      cb(files);
    });
  });
}



