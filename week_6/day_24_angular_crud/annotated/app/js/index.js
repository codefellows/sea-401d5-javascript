const angular = require('angular');
const app = angular.module('SecondApp', []);

app.controller('FirstController', function($http) {
  this.val = 'HELLO';
  const url = 'http://localhost:3000/';
  this.notes = [];

  this.getNotes = function() {
    $http.get(url)
      .then((res) => {
        this.notes = res.data.data;
      }, (err) => {
        console.log(err);
      });
  };

  this.addNote = function() {
    $http.post(url, this.note)
      .then((res) => {
        //add the note that comes back from the server to our
        //array so that we have access to the _id.
        this.notes.push(res.data);
      }, (err) => {
        console.log(err);
      });
  };

  this.updateNote = function(note, updateNote) {
    // this is a little different from the inclass. We either need
    // to reset the body on the original note with the new one, or
    // set the new one with an _id. Otherwise it breaks other
    // functionality.
    note.body = updateNote.body;
    $http.put(url, note)
      .then(() => {
        // if we get a response from the server we assume everything
        // went ok and update the view. Don't send another request to
        // the server for them.
        this.notes = this.notes.map(n => {
          return n._id === note._id ? note : n;
        });
      }, (err) => {
        console.log(err);
      });
  };

  this.deleteNote = function(note) {
    $http.delete(url + note._id)
      .then(() => {
        //just get the _id off the note! no more copy/pasting.
        this.notes = this.notes.filter((n) => note._id !== n._id);
      }, (err) => {
        console.log(err);
      });
  };
});
