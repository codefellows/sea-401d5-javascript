module.exports = function(app) {
  app.directive('todoList', function() {
    return {
      templateUrl: './templates/notes/todo.html',
      scope: {notes: '='},
      controller: TodoController,
      controllerAs: 'todoctrl'
    };
  });
};


function TodoController($scope) {
  //$scope.notes = notes attribute from directive;
  $scope.changeView = function() {
    console.log($scope.mode);
  };

  this.showArticle = function(note) {
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
  this.deleteThisShit = function(note) {
    $scope.notes.splice($scope.notes.indexOf(note), 1);
  };

  this.isOnTheController = 'I AM ON CONTROLLER';
}



