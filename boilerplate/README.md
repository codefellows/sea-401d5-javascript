## angular boilerplate  

###### adding routing to boilerplate
* npm install angular-route
* add ngRoute to app  
`var FirstApp = angular.module('FirstApp', ['ngRoute']);`
* add 'partials' folder to templates
* in index.html replace html with ng-view  
`<main ng-view>
</main>`
* put html in a partial  
`<first-directive></first-directive>
`
* add router.js with routing config

``` JavaScript
'use strict';

module.exports = function(crudApp) {
  crudApp.config(['$routeProvider', function($route) {
    $route
      .when('/', {
        templateUrl: '/templates/partials/FirstApp.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
};
```  
