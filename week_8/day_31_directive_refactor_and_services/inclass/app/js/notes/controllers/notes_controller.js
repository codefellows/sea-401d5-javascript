module.exports = function(app) {
  app.controller('NotesController', function($http) {
    console.log('hi')
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
          this.notes.push(res.data);
        }, (err) => {
          console.log(err);
        });
    };

    this.updateNote = function(note, updateNote) {
      note.body = updateNote.body;
      $http.put(url, note)
        .then(() => {
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
          this.notes = this.notes.filter((n) => note._id !== n._id);
        }, (err) => {
          console.log(err);
        });
    };
  });
};
