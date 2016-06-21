module.exports = function(app) {
  app.directive('todoList', function() {
    return {
      templateUrl: './templates/notes/todo.html',
      scope: {notes: '='},
      controller: function($scope) {
        $scope.changeView = function() {
          console.log($scope.mode);
        };

        $scope.showArticle = function(note) {
          if (!note) {
            $scope.mode = 'list';
            return;
          }

          $scope.currentNote = note;
          $scope.mode = 'single';
        };

        $scope.addNote = function(title, body) {
          $scope.notes.push({title, body});
        };
      }
    };
  });
};
