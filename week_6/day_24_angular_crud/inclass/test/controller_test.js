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

  it('should create a note', () => {
    $httpBackend.expectPOST('http://localhost:3000/')
      .respond(200, {data: {body: 'test note'}});

    notesctrl.newNote = {body: 'test note'};
    notesctrl.addNote();
    $httpBackend.flush();

    expect(notesctrl.newNote).toBe(null);
  });

  it('should delete a note', () => {
    let testNote = {body: 'test note', _id:1};
    $httpBackend.expectDELETE('http://localhost:3000/1')
      .respond(200, {message: 'deleted'});

    notesctrl.notes.push(testNote);
    notesctrl.deleteNote(testNote);
    $httpBackend.flush();

    expect(notesctrl.notes.length).toBe(1);
  });
});





