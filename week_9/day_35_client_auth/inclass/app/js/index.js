const angular = require('angular');
const ngRoute = require('angular-route');

const app = angular.module('PenguinApp', [ngRoute]);

app.controller('PenguinController', function($http) {
  const url = 'http://localhost:3000/penguins';
  this.penguins = [];

  this.getPenguins = function() {
    $http.get(url)
      .then((res) => {
        this.penguins = res.data.data;
      }, (err) => {
        console.log(err);
      });
  };

  this.addPenguin = function(penguin) {
    $http.post(url, penguin)
      .then((res) => {
        this.penguins.push(res.data);
        this.penguin = null;
      }, (err) => {
        console.log(err);
      });
  };
});

app.controller('SigninController', function($location) {
  this.goHome = function() {
    $location.url('/');
  };
});

app.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: './views/home.html',
    controller: 'PenguinController',
    controllerAs: 'penguinctrl'
  })
  .when('/signin', {
    template:'./views/signin.html',
    controller: 'SigninController',
    controllerAs: 'signinctrl'
  });
});
