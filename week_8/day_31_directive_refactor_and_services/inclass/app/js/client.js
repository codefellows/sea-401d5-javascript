const angular = require('angular');
const app = angular.module('NotesApp', []);

require('./services')(app);
require('./notes')(app);
