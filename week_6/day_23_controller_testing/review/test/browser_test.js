'use strict';
const angular = require('angular');

require('angular-mocks');

require('../app/js/client');

describe('Controller Tests', () => {
  let firstctrl;

  it('should run a test', () => {
    expect(true).toBe(true);
  });

  beforeEach(() => {
    angular.mock.module('NotesApp');
    angular.mock.inject(function($controller) {
      firstctrl = new $controller('NotesController');
    });
  });

  it('should have a property notes', () => {
    expect(Array.isArray(firstctrl.notes)).toBe(true);
  });

  it('should add notes', () => {
    firstctrl.addNote('test-note');
    expect(firstctrl.notes.indexOf('test-note') !== -1).toBe(true);
  });
});







