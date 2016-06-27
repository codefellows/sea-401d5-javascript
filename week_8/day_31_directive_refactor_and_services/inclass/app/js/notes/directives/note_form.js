module.exports = function(app) {
  app.directive('noteForm', function() {
    return {
      scope: {
        type: '@'
      },
      templateUrl: './templates/notes/note_form.html'
    };
  });
};
