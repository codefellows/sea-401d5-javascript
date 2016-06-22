module.exports = function(app) {
  app.directive('dummy', function() {
    return {
      templateUrl: './templates/notes/dummy.html',
      scope: {
        thing: '='
      },
      replace: true
    };
  });
};
