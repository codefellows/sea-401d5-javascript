const fs = require('fs');

const file = fs.readFileSync(__dirname + '/palette-bitmap.bmp');

const headers = {};
console.log(file.slice(0, 4));

console.log(file[0], file[1]);

headers.type = file.toString('ascii', 0, 2);
headers.size = file.readUInt32LE(2);
headers.pixelStart = file.readUInt32LE(10);

console.log(file.readUInt8(54), file.readUInt8(55), file.readUInt8(56), file.readUInt8(57))


console.log(headers);