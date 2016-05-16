'use strict';
const expect = require('chai').expect;
const transformPixelsArray = require('../lib/transformer').transformPixelsArray;

describe('unit test for transfomer', () => {
  it('should return an array', () => {
    expect(Array.isArray(transformPixelsArray([], []))).to.eql(true);
  })
  it('should transform a "pixel array"', () => {
    let fakePixels = [{
      blue: 255,
      green: 255,
      red: 255
    },
    {
      blue: 255,
      green: 255,
      red: 255
    }]
    let transformedPixels = transformPixelsArray(fakePixels, []);
    expect(transformedPixels[0].blue).to.eql(0);
    expect(transformedPixels[1].red).to.eql(255);
  })
})