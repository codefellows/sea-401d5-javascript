'use strict';

module.exports = function(app) {
  app.directive('cowNote', function() {
    return {
      templateUrl: './templates/notes/cow_note.html',
      scope: {
        text: '=',
        file: '@'
      },
      transclude: true,
      //$scope is required here!
      controller: function($scope, CowsayService) {
        $scope.cow = CowsayService.makeCow($scope.text, $scope.file);
      }
    };
  });
};
