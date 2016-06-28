module.exports = function(app) {
  app.directive('note', function() {
    return {
      templateUrl: './templates/notes/note_directive.html',
      restrict: 'E',
      scope: {
        note: '='
      },
      controller: function($scope) {
      },
      link: function($scope, elem, attr, controller) {
        controller.showArticle();
        $scope.logController = function() {
          console.log(controller);
        };
        $scope.deleteThisShit = controller.deleteThisShit;
        $scope.showArticle = controller.showArticle;
      },
      require: '^todoList'
    };
  });
};