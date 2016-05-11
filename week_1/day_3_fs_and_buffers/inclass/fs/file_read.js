const fs = require('fs');

var fileText;

fs.readFile('./test.txt', (err, data) => {
  if (err) return console.log(err);
  fileText = data.toString();
  fs.writeFile('./output.txt', data);
})

var b = new Buffer('MORE TEST STUFF \n');

fs.writeFile('./output_two.txt', b);

debugger;