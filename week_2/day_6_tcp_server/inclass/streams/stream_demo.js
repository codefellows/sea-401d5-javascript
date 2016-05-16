'use strict';
const fs = require('fs');

const readStream = fs.createReadStream(__dirname + '/test.txt');


let dataString = '';

readStream.on('data', (chunk) => {
  console.log(chunk);
  console.log('SLOTH LOVE CHUNK');
  dataString += chunk.toString();
});

readStream.on('end', () => {
  console.log('stream ended', dataString);
});


process.stdin.on('data', (chunk) => {
  console.log(`${chunk.toString()} was piped into this program`);
});

process.stdin.pipe(process.stdout);

