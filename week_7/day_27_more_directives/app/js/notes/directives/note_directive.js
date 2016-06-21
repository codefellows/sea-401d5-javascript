module.exports = function(app) {
  app.directive('note', function() {
    return {
      templateUrl: './templates/notes/note_directive.html',
      scope: {
        body: '='
      }
    };
  });
};