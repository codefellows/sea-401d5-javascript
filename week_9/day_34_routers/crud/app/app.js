//paging: http://stackoverflow.com/questions/19409492/how-to-achieve-pagination-table-layout-with-angular-js
var app = angular.module('myApp', ['ngRoute']);

app.factory('services', ['$http', function($http) {
  var customers = [];
  var loaded = false;

  var obj = {};
  obj.getCustomers = function() {
    var promise = $http.get('./data/customer.json').then(function(response) {
      if (loaded === true) {
        return customers;
      } else {
        customers = response.data;
        loaded = true;
        return response.data;
      }
    });
    return promise;
  };


  obj.getCustomer = function(customerID) {
    var arr;
    arr = customers.filter(function(item) {
      return item.customerNumber == customerID;
    });
    return arr[0];
  };

  obj.insertCustomer = function(customer) {
    var id = -1;
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

app.controller('listCtrl', function($scope, services) {
  services.getCustomers().then(function(data) {
    $scope.customers = data;
    $scope.gap = Math.min($scope.gap,$scope.customers.data/$scope.gap);
    $scope.groupToPages();
  });
  $scope.gap = 5;
  $scope.itemsPerPage = 5;
  $scope.pagedItems = [];
  $scope.currentPage = 0;
  $scope.range = function(size, start, end) {
    var ret = [];
    console.log(size, start, end);

    if (size < end) {
      end = size;
      start = size - $scope.gap;
    }
    for (var i = start; i < end; i++) {
      ret.push(i);
    }
    console.log(ret);
    return ret;
  };

  $scope.prevPage = function() {
    if ($scope.currentPage > 0) {
      $scope.currentPage--;
    }
  };

  $scope.nextPage = function() {
    if ($scope.currentPage < $scope.pagedItems.length - 1) {
      $scope.currentPage++;
    }
  };

  $scope.setPage = function() {
    $scope.currentPage = this.n;
  };
  $scope.groupToPages = function() {
    $scope.pagedItems = [];

    for (var i = 0; i < $scope.customers.length; i++) {
      if (i % $scope.itemsPerPage === 0) {
        $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [$scope.customers[i]];
      } else {
        $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.customers[i]);
      }
    }
  };

});

app.controller('editCtrl', function($scope, $rootScope, $location, $routeParams, services, customer) {
  var customerID = ($routeParams.customerID) ? parseInt($routeParams.customerID) : 0;
  $rootScope.title = (customerID > 0) ? 'Edit Customer' : 'Add Customer';
  $scope.buttonText = (customerID > 0) ? 'Update Customer' : 'Add New Customer';
  var original = customer || '';
  original._id = customerID;
  $scope.customer = angular.copy(original);
  $scope.customer._id = customerID;

  $scope.isClean = function() {
    return angular.equals(original, $scope.customer);
  };

  $scope.deleteCustomer = function(customer) {
    $location.path('/');
    if (confirm('Are you sure to delete customer number: ' + $scope.customer._id) == true)
      services.deleteCustomer(customer.customerNumber);
  };

  $scope.saveCustomer = function(customer) {

    if (customerID <= 0) {
      services.insertCustomer(customer);
    } else {
      services.updateCustomer(customerID, customer);
    }
    $location.path('/');
  };
});

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/', {
      title: 'Customers',
      templateUrl: 'partials/customers.html',
      controller: 'listCtrl'
    })
      .when('/customers', {
        title: 'Customers',
        templateUrl: 'partials/customers.html',
        controller: 'listCtrl'
      })
      .when('/edit-customer/:customerID', {
        title: 'Edit Customers',
        templateUrl: 'partials/edit-customer.html',
        controller: 'editCtrl',
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
  }
]);
app.run(['$location', '$rootScope', function($location, $rootScope) {
  $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
    $rootScope.title = current.$$route.title;
  });
}]);
