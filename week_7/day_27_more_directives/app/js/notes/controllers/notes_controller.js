module.exports = function(app) {
  app.controller('NotesController', NotesController);

};

function NotesController() {
  this.notes = [{body: 'first note', _id: 2}];
};