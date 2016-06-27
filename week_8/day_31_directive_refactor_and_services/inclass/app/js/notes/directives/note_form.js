module.exports = function(app) {
  app.directive('noteForm', function() {
    return {
      scope: {
        type: '@',
        note: '='
      },
      templateUrl: './templates/notes/note_form.html',
      require: '^^ngController',
      link: function($scope, elem, attr, controller) {
        $scope.deleteNote = controller.deleteNote;
        $scope.submit = $scope.type === 'new' ? controller.addNote
          : controller.updateNote;

        console.log($scope.note);
      }
    };
  });
};
