const angular = require('angular');

var ContactsApp = angular.module('ContactsApp', []);
require('./contacts/contacts')(ContactsApp);
