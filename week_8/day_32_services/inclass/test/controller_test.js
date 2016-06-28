const angular = require('angular');

require('../app/js/index.js');
require('angular-mocks');

describe('controller tests', () => {
  let firstctrl;
  let $httpBackend;

  beforeEach(() => {
    angular.mock.module('SecondApp');
    angular.mock.inject(function($controller, _$httpBackend_) {
      firstctrl = new $controller('FirstController');
      $httpBackend = _$httpBackend_;
    });
  });

  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should have a property val', () => {
    expect(firstctrl.val).toBe('HELLO');
  });

  it('should get notes', () => {
    $httpBackend.expectGET('http://localhost:3000/')
      .respond(200, {data:[]});
    firstctrl.getNotes();
    $httpBackend.flush();
    expect(Array.isArray(firstctrl.notes)).toBe(true);
  });
});
