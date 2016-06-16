'use strict';
const angular = require('angular');
require('angular-mocks');
require('../app/js/client.js');

describe('controller tests', () => {
  let notesctrl;
  let $httpBackend;

  beforeEach(() => {
    angular.mock.module('NotesApp');
    angular.mock.inject(function($controller, _$httpBackend_) {
      notesctrl = new $controller('NotesController');
      $httpBackend = _$httpBackend_;
    });
  });

  afterEach(() => {
    $httpBackend.verifyNoOutstandingRequest();
    $httpBackend.verifyNoOutstandingExpectation();
  });

  it('should run a test', () => {
    expect(false).toBe(false);
  });

  it('should have a notes array', () => {
    expect(Array.isArray(notesctrl.notes)).toBe(true);
  });

  it('should get a list of notes', () => {
    $httpBackend.expectGET('http://localhost:3000/')
      .respond(200, {data: [{body: 'test note'}]});

    notesctrl.getNotes();
    $httpBackend.flush();

    expect(notesctrl.notes[0].body).toBe('test note');
  });
});





