module.exports = function(app) {
  app.controller('ImageController', ['$scope', function() {
    this.url = 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=400&h=400';
    this.height = 400;
    this.width = 400;
    this.title = 'Food';
  }]);
};
