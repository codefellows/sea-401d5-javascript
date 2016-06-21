module.exports = function(app) {
  app.directive('todoList', function() {
    return {
      templateUrl: './templates/notes/todo.html',
      scope: {
        notes: '='
      }
    };
  });
};
