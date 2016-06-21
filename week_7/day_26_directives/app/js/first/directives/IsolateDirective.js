module.exports = function(app) {
  app.directive('isolateDirective', function() {
    return {
      templateUrl: './templates/FirstApp/Isolate.html',
      restrict: 'E', //A attribute E element C class,
      scope:{
        firstname: '@',  //attribute binding - expects a string - two way binding only within directive
        lastname:  '=',  //two way binding with controller
        address: '=',  // two way
        fullname: '&'  // behavior function
      }

    };
  });
};
