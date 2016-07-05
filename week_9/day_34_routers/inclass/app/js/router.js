'use strict';

module.exports = function(crudApp) {
  crudApp.config(['$routeProvider', function($route) {
    $route
      .when('/', {
        templateUrl: '/templates/partials/FirstApp.html'
      })
      .when('/list', {
        templateUrl: '/templates/partials/ListView.html',
        controller: 'ListController'
      })
      .when('/edit-customer/:customerID', {
        templateUrl: '/templates/partials/EditView.html',
        controller: 'EditController',
        resolve: {
          customer: function(services, $route) {
            var customerID = $route.current.params.customerID;
            return services.getCustomer(customerID);
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
};
