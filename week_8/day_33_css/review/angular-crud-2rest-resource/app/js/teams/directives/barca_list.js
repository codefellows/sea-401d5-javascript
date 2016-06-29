module.exports = function(app) {
  app.directive('barcaList', function() {
    return {
      scope: {
        barcas: '='
      },
      templateUrl: './templates/teams/barca_list.html'
    };
  });
};
