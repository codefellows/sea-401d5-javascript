module.exports = function(app) {
  require('./FirstController')(app);
  require('./ListController')(app);
  require('./EditController')(app);
};
