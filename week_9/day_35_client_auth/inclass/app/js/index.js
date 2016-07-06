const angular = require('angular');
const app = angular.module('PenguinApp', []);

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
