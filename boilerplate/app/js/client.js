require('angular');
require('angular-route');
var angular = window.angular;

var FirstApp = angular.module('FirstApp', ['ngRoute']);
require('./first')(FirstApp);
require('./router')(FirstApp);
