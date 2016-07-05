module.exports = function(app) {
  app.controller('ListController', ['$scope','$location','services', function($scope, $location, services) {
    $scope.customers = services.getCustomers();
    this.firstname = '';
    this.lastname = '';
    this.zipcode = '';

    $scope.go = function(path){
      $location.path(path);
    };
  }]);
};
