module.exports = function(app) {
  app.factory('ErrorService', function() {
    const service = {};
    const errors = [];

    service.logError = function(message) {
      return function(err) {
        errors.push(message);
        console.log(err);
      };
    };

    service.getErrors = function() {
      return errors;
    };

    return service;
  });
};
