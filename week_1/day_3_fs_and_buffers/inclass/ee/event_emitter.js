const EventEmitter = require('events').EventEmitter;
const fs = require('fs');
const ee = new EventEmitter();

ee.on('custom-event', (data)=> {
  console.log('EVENT EMITTED ' + data);
});

ee.emit('custom-event', 'event string');

ee.on('file-read', (data, string, stringTwo) => {
  console.log('file read', data.toString(), string, stringTwo);
})

fs.readFile('./test_file.txt', (err, data) => {
  console.log(data);
  ee.emit('file-read', data, 'another', 'yet another');
})

