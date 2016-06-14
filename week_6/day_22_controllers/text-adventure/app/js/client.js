const angular = require('angular');

var adventureApp = angular.module('adventureApp', []);
require('./game/game')(adventureApp);
