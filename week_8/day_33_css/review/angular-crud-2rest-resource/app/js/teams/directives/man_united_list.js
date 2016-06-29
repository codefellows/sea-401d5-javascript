module.exports = function(app) {
  app.directive('manUnitedList', function() {
    return {
      scope: {
        manuniteds: '='
      },
      templateUrl: './templates/teams/man_united_list.html'
    };
  });
};
