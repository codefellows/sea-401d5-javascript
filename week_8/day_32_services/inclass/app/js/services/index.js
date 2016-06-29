module.exports = function(app) {
  require('./first_service')(app);
  require('./cowsay_service')(app);
  require('./error_service')(app);
};
