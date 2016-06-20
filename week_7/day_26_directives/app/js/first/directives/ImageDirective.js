module.exports = function(app) {
  app.directive('imageDisplay', function() {
    return {
      restrict: 'E',
      template: '<img src="{{url}}" height="{{height}}" width="{{width}}" alt="{{title}}">',
      scope: {
        url: '@',
        height: '@',
        width: '@',
        title: '@'
      }
    };
  });
};
