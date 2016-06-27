const cowsay = require('cowsay-browser');

module.exports = function(app) {
  app.controller('NotesController', function($http, FirstService) {
    const url = 'http://localhost:3000/';
    this.cow = cowsay.say({
      text: 'mooooooooooooooooooooooooooooooooo',
      f: 'koala'
    });
    this.notes = [];
    this.message = FirstService.message;

    this.getNotes = function() {
      $http.get(url)
        .then((res) => {
          this.notes = res.data.data;
        }, (err) => {
          console.log(err);
        });
    };

    this.addNote = function(note) {
      $http.post(url, note)
        .then((res) => {
          this.notes.push(res.data);
        }, (err) => {
          console.log(err);
        });
    }.bind(this);

    this.updateNote = function(note) {
      $http.put(url, note)
        .then(() => {
          this.notes = this.notes.map(n => {
            return n._id === note._id ? note : n;
          });
        }, (err) => {
          console.log(err);
        });
    }.bind(this);

    this.deleteNote = function(note) {
      $http.delete(url + note._id)
        .then(() => {
          this.notes = this.notes.filter((n) => note._id !== n._id);
        }, (err) => {
          console.log(err);
        });
    };
  });
};
