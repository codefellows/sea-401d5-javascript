#### Adding Routers

###### client.js
``` JavaScript
require('angular');
require('angular-route');
var angular = window.angular;

var crudApp = angular.module('crudApp', ['ngRoute']);

require('./first')(crudApp);
require('./first/services')(crudApp);
require('./router')(crudApp);

```

###### ListController.js
``` JavaScript
module.exports = function(app) {
  app.controller('ListController', ['$scope','services', function($scope, services) {
    $scope.customers = services.getCustomers();
    this.firstname = '';
    this.lastname = '';
    this.zipcode = '';
  }]);
};

```

###### Service.js
 Crud on an array
``` JavaScript
module.exports = function(app) {
  app.factory('services', [ function() {
    var customers = [{
      customerNumber: 1,
      firstname:'George',
      lastname:'Washington',
      zipcode:'98101'
    }];

    var obj = {};
    obj.getCustomers = function() {
      return customers;

    };

    obj.getCustomer = function(customerID) {
      var arr;
      arr = customers.filter(function(item) {
        return item.customerNumber == customerID;
      });
      return arr[0];
    };

    obj.insertCustomer = function(customer) {
      var id = 0;
      customers.map(function(item) {
        if (item.customerNumber > id) id = item.customerNumber;
      });
      customer.customerNumber = ++id; //get new id
      customers.push(customer);
      return customer;
    };

    obj.updateCustomer = function(id, customer) {
      var existingCustomer = obj.getCustomer(id);
      for (var key in customer) {
        existingCustomer[key] = customer[key];
      }
      return customer;
    };

    obj.deleteCustomer = function(id) {
      var index = customers.indexOf(obj.getCustomer(id));
      customers.splice(index, 1);
    };

    return obj;
  }]);
};

```
###### Router config
``` JavaScript
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
      .otherwise({
        redirectTo: '/'
      });
  }]);
};

```
###### List template

``` html
<h1>Customers</h1>
<div class="container">

  <div class="row">
    <div class="twelve column">
      <table class="u-full-width">
        <thead>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Zipcode</th>
          <th>Action</th>
        </thead>
        <tbody>
          <tr ng-repeat="data in customers">
            <td>{{data.firstname}}</td>
            <td>{{data.lastname}}</td>
            <td>{{data.zipcode}}</td>
            <td><a href="#/edit-customer/{{data.customerNumber}}" class="btn">&nbsp;Edit Customer</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>

```
###### Edit controller
``` JavaScript
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

```
###### Edit View (Add, Edit, Delete)
``` html
<h2>Customer</h2>
<div class="container">
  <div class="row">
    <form>
      <label for="firstname">First Name</label>
      <input class="u-full-width" ng-model="customer.firstname" type="text" placeholder="enter first name" id="firstname">

      <label for="lastname">Last Name</label>
      <input type="text" class="u-full-width" ng-model="customer.lastname" id="lastname">

      <label for="zipcode">Zipcode</label>
      <input type="text" class="u-full-width" ng-model="customer.zipcode" id="zipcode">

      <input type="button" class="button-primary" ng-click="go('/list')" value="Cancel">
      <input type="button" class="button-primary" ng-click="deleteCustomer(customer)" value="Delete">
      <input type="button" class="button-primary" ng-click="saveCustomer(customer);" value="Save">

    </form>
  </div>
</div>

```
###### Router tests
``` JavaScript
//require('../app/js/client');
const angular = require('angular');

require('angular-mocks');
require(__dirname + '/../app/js/client.js');

describe('crud app tests', () => {
  beforeEach(() => {
    angular.mock.module('crudApp');

  });

  it('should map routes to controllers', function() {
    angular.module('crudApp');

    angular.mock.inject(function($route) {

      expect($route.routes['/list'].controller).toBe('ListController');
      expect($route.routes['/list'].templateUrl).
      toEqual('/templates/partials/ListView.html');

      expect($route.routes['/edit-customer/:customerID'].controller).toBe('EditController');
      expect($route.routes['/edit-customer/:customerID'].templateUrl).
      toEqual('/templates/partials/EditView.html');


      // otherwise redirect to
      expect($route.routes[null].redirectTo).toEqual('/');
    });
  });
});

```
