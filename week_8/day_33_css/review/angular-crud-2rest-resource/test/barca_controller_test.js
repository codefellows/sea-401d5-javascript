'use strict';

const angular = require('angular');

require('../app/js/client.js');
require('angular-mocks');

describe('controller tests', () => {
  let barcactrl;
  let $httpBackend;

  beforeEach(() => {
    angular.mock.module('SoccerApp');
    angular.mock.inject(function($controller, _$httpBackend_) {
      barcactrl = new $controller('BarcaController');
      $httpBackend = _$httpBackend_;
    });
  });

  afterEach(() => {
    $httpBackend.verifyNoOutstandingRequest();
    $httpBackend.verifyNoOutstandingExpectation();
  });

  it('should get a list of barcas', () => {

    $httpBackend.expectGET('http://localhost:6969/barca')
      .respond(200, {data:[]});
    
    barcactrl.getBarcas();
    $httpBackend.flush();
    // console.log(barcactrl.barcas);
    expect(Array.isArray(barcactrl.barcas.data)).toBe(true);
  });

  it('should create a man united player', () => {
    $httpBackend.expectPOST('http://localhost:6969/barca')
      .respond(200, {data: {name: 'test player'}});

    barcactrl.barca = {body: 'test player'};
    barcactrl.addBarca();
    $httpBackend.flush();

    expect(barcactrl.barca).toBe(null);
  });

  it('should delete a barca player', () => {
    let testBarcaPlayer = {name: 'test player', _id:1};
    $httpBackend.expectDELETE('http://localhost:6969/barca/1')
      .respond(200, {message: 'deleted'});

    barcactrl.barcas.push(testBarcaPlayer);
    barcactrl.deleteBarca(testBarcaPlayer);

    $httpBackend.flush();

    expect(barcactrl.barcas.length).toBe(0);
  });

  it('should update a barca player', () => {
    let testBarcaPlayer = {name: 'test player'};
    barcactrl.barcas.push(testBarcaPlayer);
    let updatedBarca = {name: 'updated barca'};
    $httpBackend.expectPUT('http://localhost:6969/barca/')
      .respond(200, {data: {name: 'updated barca'}});

    barcactrl.updateBarca(testBarcaPlayer, updatedBarca);
    $httpBackend.flush();

    expect(barcactrl.barcas[0].name).toBe('updated barca');
  });
});
