'use strict';
module.exports = function(app) {
  app.controller('NotesController', NotesController);

};

function NotesController($scope) {
  this.notes = [{body: 'first note', _id: 2}];
  // this.deleteThisShit = function(note) {

  // };
  // this.addNote = function(title, body) {
  //   let newNote = {title, body};
  //   this.notes.push(newNote);
  // };
  $scope.scopeThing = 'I AM ON SCOPE';
}
