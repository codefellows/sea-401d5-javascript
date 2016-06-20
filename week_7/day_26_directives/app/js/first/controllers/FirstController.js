module.exports = function(app) {
  app.controller('FirstController', ['$scope', function() {
    this.firstname = 'Snakes';
    this.lastname = 'Weasels';
    this.address = 'Seattle, WA';
    this.fullname = function() {
      alert (this.firstname + ' ' + this.lastname);
    };
  }]);
};
