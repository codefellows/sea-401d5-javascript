'use strict';

const angular = require('angular');

const app = angular.module('NotesApp', []);

app.controller('NotesController', NotesController);

function NotesController() {
  this.notes = ['notes1', 'notes2'];
  this.addNote = function(note) {
    this.notes.push(note);
  }
};