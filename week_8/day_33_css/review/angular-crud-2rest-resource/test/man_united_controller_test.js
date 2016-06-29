'use strict';

const angular = require('angular');

require('../app/js/client.js');
require('angular-mocks');

describe('controller tests', () => {
  let manuctrl;
  let $httpBackend;

  beforeEach(() => {
    angular.mock.module('SoccerApp');
    angular.mock.inject(function($controller, _$httpBackend_) {
      manuctrl = new $controller('ManUnitedController');
      $httpBackend = _$httpBackend_;
    });
  });

  afterEach(() => {
    $httpBackend.verifyNoOutstandingRequest();
    $httpBackend.verifyNoOutstandingExpectation();
  });

  it('should get a list of manUniteds', () => {

    $httpBackend.expectGET('http://localhost:6969/manUnited')
      .respond(200, {data:[]});


    manuctrl.getmanUniteds();
    $httpBackend.flush();
    // console.log(manuctrl.manUniteds);
    expect(Array.isArray(manuctrl.manUniteds.data)).toBe(true);
  });

  it('should create a man united player', () => {
    $httpBackend.expectPOST('http://localhost:6969/manUnited')
      .respond(200, {data: {name: 'test player'}});

    manuctrl.manUnited = {body: 'test player'};
    manuctrl.addmanUnited();
    $httpBackend.flush();

    expect(manuctrl.manUnited).toBe(null);
  });

  it('should delete a man united player', () => {
    let testManUPlayer = {name: 'test player', _id:1};
    $httpBackend.expectDELETE('http://localhost:6969/manUnited/1')
      .respond(200, {message: 'deleted'});

    manuctrl.manUniteds.push(testManUPlayer);
    manuctrl.deletemanUnited(testManUPlayer);

    $httpBackend.flush();

    expect(manuctrl.manUniteds.length).toBe(0);
  });

  it('should update a man united player', () => {
    let testManUPlayer = {name: 'test player'};
    manuctrl.manUniteds.push(testManUPlayer);
    let updatedmanUnited = {name: 'updated man united'};
    $httpBackend.expectPUT('http://localhost:6969/manUnited/')
      .respond(200, {data: {name: 'updated man united'}});

    manuctrl.updatemanUnited(testManUPlayer, updatedmanUnited);
    $httpBackend.flush();

    expect(manuctrl.manUniteds[0].name).toBe('updated man united');
  });
});
