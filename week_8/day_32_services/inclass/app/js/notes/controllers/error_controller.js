module.exports = function(app) {
  app.controller('ErrorController', function(ErrorService) {
    this.errors = ErrorService.getErrors();
  });
};
