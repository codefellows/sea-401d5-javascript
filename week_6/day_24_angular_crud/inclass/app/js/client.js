'use strict';
const angular = require('angular');

const app = angular.module('NotesApp', []);

app.controller('NotesController', ['$http', NotesController]);

function NotesController($http) {
  this.smokeTest = 'HELLO';
  this.$http = $http;
  this.notes = [{body: 'test note'}];

}

NotesController.prototype.getNotes = function() {
  this.$http.get('http://localhost:3000/')
    .then((res) => {
      this.notes = res.data.data;
    }, (err) => {
      console.log(err);
    });
};

NotesController.prototype.addNote = function() {
  this.$http.post('http://localhost:3000/', this.newNote)
    .then((res) => {
      this.notes.push(res.data);
      this.newNote = null;
    }, (err) => {
      console.log(err);
    });
};

NotesController.prototype.deleteNote = function(note) {
  this.$http.delete('http://localhost:3000/' + note._id)
    .then(() => {
      let index = this.notes.indexOf(note);
      this.notes.splice(index, 1);
    }, (err) => {
      console.log(err);
    });
};

NotesController.prototype.updateNote = function(note, updatedNote) {
  let arrayNote = this.notes[this.notes.indexOf(note)];
  arrayNote.body = updatedNote;
};