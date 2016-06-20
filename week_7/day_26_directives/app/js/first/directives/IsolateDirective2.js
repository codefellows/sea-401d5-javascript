module.exports = function(app) {
  app.directive('isolateDirectiveSecond', function() {
    return {
      restrict: 'A',
      templateUrl: './templates/FirstApp/IsolateTemplate2.html',
      scope: {
        authLastname: '@lastname', //this is for already evaluated to a string
        authFirstname: '=firstname'  //this is for 2 way binding
      }
    };

  });
};
