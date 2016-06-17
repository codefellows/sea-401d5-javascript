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
      //$httpBackend simulates a server. We get it back by injecting
      //it and setting it to a variable. Rememeber you can refer to
      //them both as just the variable name and with underscores on
      //either side. Here we do that so we can set the outer variable
      //to what we get back from the injector.
      $httpBackend = _$httpBackend_;
    });
  });

  afterEach(() => {
    //these two methods run after every test and make sure that there's
    //nothing sitting around in $httpBackend that hasn't been dealt with.
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should have a property val', () => {
    expect(firstctrl.val).toBe('HELLO');
  });

  it('should get notes', () => {
    //expectGet is a method that tells your mock server
    //to look for a request with a method of GET at the
    //url that you pass in.
    $httpBackend.expectGET('http://localhost:3000/')
    //respond tells $httpBackend to send back this response
    //the first argument is that status and the second is
    //the response body.
      .respond(200, {data:[]});
    //this is the method from our contoller that sends off the
    //the request.
    firstctrl.getNotes();
    //this clears $httpBackend and triggers the response method.
    $httpBackend.flush();
    //By now the state of our controller should have changed and
    //we can verify that here.
    expect(Array.isArray(firstctrl.notes)).toBe(true);
  });
});
