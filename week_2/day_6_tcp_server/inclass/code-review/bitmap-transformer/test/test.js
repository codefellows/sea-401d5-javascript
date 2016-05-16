'use strict';

const fs = require('fs');
const expect = require('chai').expect;
const transformer = require('./../lib/transformer');

describe('transformer', () => {
  let buffer;
  before((done) => {
    fs.readFile(__dirname + '/../data/non-palette-bitmap.bmp', (err, data) => {
      if (err) {console.log(err)};
      buffer = data;
      done();
    })
  })
  it('should read proper header properties', () => {
    let expected = {
      type: 'BM',
      size: 30054,
      pixelStart: 54,
      colorDepth: 24,
      bytesPerPixel: 3
    };
    let results = transformer.headers;
    expect(results).to.eql(expected);
  })
  it('buffer should be the size its header declares', () => {
    let results = transformer.headers.size;
    let expected = buffer.length;
    console.log('buffer size: ' + results + 'bytes');
    expect(results).to.eql(expected);
  })
  it('values from the pixels array should match', () => {
    let expected = [buffer.readUInt8(84), buffer.readUInt8(85), buffer.readUInt8(86)];
    let results = [transformer.pixels[10].blue, transformer.pixels[10].green, transformer.pixels[10].red];
    console.log('tenth pixel: ' + results + ' (BGR out of 255)');
    expect(results).to.eql(expected);
  })
  it('red and green values from the transformed pixels array should match', () => {
    let expected = [buffer.readUInt8(85), buffer.readUInt8(86)];
    let results = [transformer.transPixels[10].green, transformer.transPixels[10].red];
    console.log('transformed tenth pixel: ' + results + ' (GR out of 255)');
    expect(results).to.eql(expected);
  })
  it('blue values from the transformed pixels array should be 0', () => {
    let expected = buffer.readUInt8(84) * 0;
    let results = transformer.transPixels[10].blue;
    console.log('transformed tenth pixel: ' + results + '(B out of 255)');
    expect(results).to.equal(expected);
  })
  it('new buffer headers should be the same as the old headers', () => {
    let expected = {
      type: buffer.toString('ascii', 0, 2),
      size: buffer.readUInt32LE(2),
      pixelStart: buffer.readUInt32LE(10),
      colorDepth: buffer.readUInt16LE(28)
    };
    let results = {
      type: transformer.transBuffer.toString('ascii', 0, 2),
      size: transformer.transBuffer.readUInt32LE(2),
      pixelStart: transformer.transBuffer.readUInt32LE(10),
      colorDepth: transformer.transBuffer.readUInt16LE(28)
    };
    expect(results).to.deep.equal(expected);
  })
  it('red and green values from the transformed buffer should match', () => {
    let expected = {
      green: buffer.readUInt8(85),
      red: buffer.readUInt8(86)
    }
    let results = {
      green: transformer.transBuffer.readUInt8(85),
      red: transformer.transBuffer.readUInt8(86)
    }
    expect(results).to.deep.equal(expected);
  })
})
