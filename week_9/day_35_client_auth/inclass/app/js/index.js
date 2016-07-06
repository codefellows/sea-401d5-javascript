const angular = require('angular');
const ngRoute = require('angular-route');

const app = angular.module('PenguinApp', [ngRoute]);

app.factory('AuthService', function($http) {
  let token;
  const service = {};

  service.signUp = function(user) {
    return $http.post('http://localhost:3000/signup', user)
      .then((res) => {
        token = res.data.token;
        return res;
      });
  };

  service.getToken = function() {
    return token;
  };

  return service;
});

app.controller('PenguinController', function($http, AuthService, $location) {
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
    $http({
      method: 'POST',
      data: penguin,
      headers: {
        token: AuthService.getToken()
      },
      url
    })
      .then((res) => {
        this.penguins.push(res.data);
        this.penguin = null;
      }, (err) => {
        $location.url('/signin');
        console.log(err);
      });
  };
});

app.controller('SigninController', function($location, AuthService) {
  this.goHome = function() {
    $location.url('/');
  };
  this.signUp = function(user) {
    AuthService.signUp(user)
      .then((res) => {
        console.log(res, 'back in controller');
      });
  };
});

app.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: './views/home.html',
    controller: 'PenguinController',
    controllerAs: 'penguinctrl'
  })
  .when('/signin', {
    templateUrl:'./views/signin.html',
    controller: 'SigninController',
    controllerAs: 'signinctrl'
  });
});
