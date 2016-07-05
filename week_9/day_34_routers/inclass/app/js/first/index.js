module.exports = function(app) {
  require('./controllers')(app);
  require('./directives')(app);
  require('./service/Service')(app);
};
