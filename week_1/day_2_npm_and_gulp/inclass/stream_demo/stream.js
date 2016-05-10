const fs = require('fs');

const ourStream = fs.createReadStream(__dirname + '/test.txt');

ourStream.pipe(process.stdout);

debugger;