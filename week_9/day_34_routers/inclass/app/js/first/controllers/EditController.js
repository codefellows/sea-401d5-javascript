module.exports = function(app) {
  app.controller('EditController', function($scope, $rootScope, $location, $routeParams, services, customer) {
    var customerID = ($routeParams.customerID) ? parseInt($routeParams.customerID) : 0;
    var original = customer || {};
    $scope.customer = window.angular.copy(original);
    $scope.deleteCustomer = function(customer) {
      $location.path('/list');
      if (confirm('Are you sure to delete customer number: ' + $scope.customer.customerNumber) == true)
        services.deleteCustomer(customer.customerNumber);
    };
    $scope.go = function(path) {
      $location.path(path);
    };
    $scope.saveCustomer = function(customer) {
      if (customerID <= 0) {
        services.insertCustomer(customer);
      } else {
        services.updateCustomer(customerID, customer);
      }
      $location.path('/list');
    };
  });
};
