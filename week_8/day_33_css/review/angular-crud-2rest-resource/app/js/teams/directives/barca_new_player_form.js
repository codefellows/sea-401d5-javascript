'use strict';
module.exports = function(app) {
  app.directive('barcaNewPlayerForm', function() {
    return {
      scope: {
        type: '@',
        player: '=',
        team: '@'
      },
      templateUrl: './templates/teams/barca_new_player_form.html',
      require: '^^ngController',
      link: function($scope, elem, attr, controller) {
        console.log(controller);

        let configMethods = {
          barca: function($scope) {
            $scope.delete = controller.deleteBarca;
            $scope.submit = function(player) {
              if ($scope.type === 'new') return controller.addBarca(player)

              controller.updateBarca(player);
            };
            $scope.formMessage = $scope.type === 'new' ? 'Add new Barca player' :
            'Update player';
          },
          manUnited: function($scope) {
            $scope.delete = controller.deletemanUnited;
            $scope.submit = $scope.type === 'new' ? controller.addmanUnited
            : controller.updatemanUnited;
            $scope.formMessage = $scope.type === 'new' ? 'Add new Man United player' :
            'Update player';
          }
        };

        configMethods[$scope.team]($scope);
      }
    };
  });
};
