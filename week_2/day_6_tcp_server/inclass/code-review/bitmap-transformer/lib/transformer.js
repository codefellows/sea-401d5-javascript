"use strict";

const fs = require('fs');
module.exports = exports = {};

const transformer = module.exports = function(cb) {
  let buffer;
  let headers = {};
  let pixels = [];
  let transPixels = [];
  let transBuffer;
  fs.readFile(__dirname + '/../data/non-palette-bitmap.bmp', (err, data) => {
    if (err) {console.log(err);}
    readAndCreateHeaders(headers, data);
    debugger;
    createPixelsArray(headers, data, pixels);
    debugger;
    transformPixelsArray(pixels, transPixels);
    debugger;
    writeAndExportBuffer(headers, data, transPixels, transBuffer);
    debugger;
    if(cb) {cb(transBuffer);}
  });
}

const readAndCreateHeaders = function(headers, data) {
  module.exports.buffer = data;
  headers.type = data.toString('ascii', 0, 2);
  headers.size = data.readUInt32LE(2);
  headers.pixelStart = data.readUInt32LE(10);
  headers.colorDepth = data.readUInt16LE(28);
  headers.bytesPerPixel = headers.colorDepth / 8;
  module.exports.headers = headers;
}

const createPixelsArray = function(headers, data, pixels) {
  for (var i = headers.pixelStart; i < headers.size; i += headers.bytesPerPixel) {
    pixels.push({'blue': data.readUInt8(i),
                'green': data.readUInt8(i + 1),
                'red': data.readUInt8(i + 2)
              });
  }
  module.exports.pixels = pixels;
}

const transformPixelsArray = module.exports.transformPixelsArray = function(pixels, transPixels) {
  for (var p = 0; p < pixels.length; p++) {
    transPixels.push({'blue': pixels[p].blue * 0,
                      'green': pixels[p].green,
                      'red': pixels[p].red
                    });
  }
  module.exports.transPixels = transPixels;
  return transPixels;
}

const writeAndExportBuffer = function(headers, data, transPixels, transBuffer) {
    transBuffer = data;
    for (var n = 0; n < transPixels.length; n++) {
      transBuffer.writeUInt8(transPixels[n].blue, headers.pixelStart + headers.bytesPerPixel * n);
      transBuffer.writeUInt8(transPixels[n].green, headers.pixelStart + headers.bytesPerPixel * n + 1);
      transBuffer.writeUInt8(transPixels[n].red, headers.pixelStart + headers.bytesPerPixel * n + 2);
    }
    module.exports.transBuffer = transBuffer;
    fs.writeFile(__dirname + '/../data/transformed-bitmap.bmp', transBuffer, (err) => {
      if(err) throw err;
      debugger;
      console.log('saved!');
      debugger;
    });
}

transformer();
