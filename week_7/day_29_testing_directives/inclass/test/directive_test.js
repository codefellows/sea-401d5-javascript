'use strict';
const angular = require('angular');
require('angular-mocks');
require('../app/js/client');

const dummyTemplate = require('../app/templates/notes/dummy.html');
const todoTemplate = require('../app/templates/notes/todo.html');
const noteTemplate = require('../app/templates/notes/note_directive.html');

describe('directive tests', () => {
  let $httpBackend;
  let $scope;
  let $compile;

  beforeEach(() => {
    angular.mock.module('NotesApp');
    angular.mock.inject(function(_$httpBackend_, $rootScope, _$compile_) {
      $scope = $rootScope.$new();
      $compile = _$compile_;
      $httpBackend = _$httpBackend_;
    });
  });

  it('should be a test', () => {
    expect(true).toBe(true);
  });

  it('should be a dummy', () => {
    $httpBackend.expectGET('./templates/notes/dummy.html')
      .respond(200, dummyTemplate);
    $scope.test = 'test data';
    let link = $compile('<dummy data="test"></dummy>');
    let directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    let h2 = directive.find('h2');
    let text = h2.text();

    expect(text).toBe('test data');
  });

  it('should list some notes', () => {
    $httpBackend.expectGET('./templates/notes/todo.html')
      .respond(200, todoTemplate);
    $httpBackend.expectGET('./templates/notes/note_directive.html')
      .respond(200, noteTemplate);

    $scope.data = [{
      body: 'test',
      title: 'test title'
    }, {
      body: 'test two',
      title: 'test title two'
    }];

    let link = $compile('<todo-list notes="data"></todo-list>');
    let directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    let notes = directive.find('note');

    let span = directive.find('span')[0];
    let text = span.innerText;
    expect(text).toBe('test');

    let div = directive.find('div');
    div.triggerHandler('click');
    expect(directive.isolateScope().mode).toBe('list');
    expect(notes.length).toBe(2);

    //directive.isolateScope().mode = 'single';
    directive.isolateScope().currentNote = {title: 'TEST TITLE', body: 'TEST BODY'};
  });

  it('should note', () => {
    $httpBackend.expectGET('./templates/notes/note_directive.html')
      .respond(200, noteTemplate);

    $scope.note = {
      body: 'TEST NOTE'
    };
    let element = angular.element('<note note="note"></note>');
    element.data('$todoListController', {});
    let link = $compile(element);
    let directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    console.log(directive);

  });
});
