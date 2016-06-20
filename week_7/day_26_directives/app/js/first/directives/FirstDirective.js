module.exports = function(app) {
  app.directive('firstDirective', function() {
    return {
      //template: '<h1>First Directive</h1>'
      templateUrl: './templates/FirstApp/FirstApp.html',
      restrict: 'E', //A attribute E element C class,
      transclude: true
    };
  });
};
