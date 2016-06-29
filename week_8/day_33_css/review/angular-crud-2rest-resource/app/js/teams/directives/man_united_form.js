module.exports = function(app) {
  app.directive('manUnitedForm', function() {
    return {
      scope: {
        type: '@',
        player: '='
      },
      templateUrl: './templates/teams/man_united_form.html',
      require: '^^ngController',
      link: function($scope, elem, attr, controller) {
        $scope.deletemanUnited = controller.deletemanUnited;
        $scope.updatemanUnited = controller.updatemanUnited;
        $scope.submit = $scope.type === 'new' ? controller.addmanUnited
        : controller.updatemanUnited;
      }
    };
  });
};
