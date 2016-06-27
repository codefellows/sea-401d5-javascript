module.exports = function(app) {
  app.factory('FirstService', function() {
    const service = {};

    service.message = 'hello from first service';
    return service;
  });
};
