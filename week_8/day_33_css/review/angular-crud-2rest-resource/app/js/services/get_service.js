module.exports = function(app) {
  app.factory('getService', function() {
    const service = {};
    service.getTeam = function(url, team) {
      $http.get(url)
      .then((res) => {
        this.team = res.data;
      }, (err) => {
        console.log(err);
      });
    };
    return service;
  });
};
