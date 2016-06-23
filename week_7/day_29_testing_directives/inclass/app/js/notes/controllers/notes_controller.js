'use strict';
module.exports = function(app) {
  app.controller('NotesController', NotesController);

};

function NotesController($scope) {
  this.notes = [{body: 'first note', _id: 2}];

  $scope.scopeThing = 'I AM ON SCOPE';
}
