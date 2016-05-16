const fs = require('fs');
const transformer = require('./lib/transformer');

// const execute = function(transBuffer) {
//   fs.writeFile(__dirname + '/data/transformed-bitmap.bmp', transBuffer, (err) => {
//     if(err) throw err;
//     console.log('saved!');
//   });
// }
// transformer(execute(transformer.transBuffer));

transformer();
