module.exports = function(app) {
  app.directive('isolateDirective', function() {
    return {
      templateUrl: './templates/FirstApp/Isolate.html',
      restrict: 'E', //A attribute E element C class,
      scope:{
        firstname: '@',  //one way binding
        lastname:  '=',  //two way binding
        address: '=',  // two way
        fullname: '&'  // behavior function
      }

    };
  });
};
