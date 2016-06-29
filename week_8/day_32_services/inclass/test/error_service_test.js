'use strict';
const angular = require('angular');
require('angular-mocks');
require('../app/js/client');

describe('error service tests', function() {
  let errorService;
  beforeEach(() => {
    angular.mock.module('NotesApp');
    angular.mock.inject(function(ErrorService) {
      errorService = ErrorService;
    });
  });
  it('should have a getter', () => {
    console.log(errorService);
    expect(typeof errorService.getErrors).toBe('string');
  });
});