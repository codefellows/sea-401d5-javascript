const angular = require('angular');
const app = angular.module('SecondApp', []);

app.controller('FirstController', function() {
  //this refers to the controller
  this.val = 'HELLO';

  //ng-repeat wants an array
  this.messages = [];
  console.log('this.val');

  this.addMessage = function(message) {
    this.messages.push(message);
  };
});
