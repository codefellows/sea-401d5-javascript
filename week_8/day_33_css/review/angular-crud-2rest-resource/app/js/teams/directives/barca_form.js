module.exports = function(app) {
  app.directive('barcaForm', function() {
    return {
      scope: {
        type: '@',
        player: '='
      },
      templateUrl: './templates/teams/barca_form.html',
      require: '^^ngController',
      link: function($scope, elem, attr, controller) {
        console.log(controller);
        $scope.deleteBarca = controller.deleteBarca;
        $scope.updateBarca = controller.updateBarca;
        $scope.submit = $scope.type === 'new' ? controller.addBarca
        : controller.updateBarca;
      }
    };
  });
};
