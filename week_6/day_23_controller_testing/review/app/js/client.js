'use strict';

const angular = require('angular');

const app = angular.module('NotesApp', []);

app.controller('NotesController', ['$http', NotesController]);

function NotesController($http) {
  this.notes = ['notes1', 'notes2'];
  this.addNote = function(note) {
    this.notes.push(note);
  };

  console.log('hello');
  $http.get('http://localhost:8080/')
    .then((res) => {
      console.log('success', res);
      this.notes = res.data.notes;
    }, (err) => {
      console.log('failure', err);
    });
}
