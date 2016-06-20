module.exports = function(app) {
  require('./FirstController')(app);
  require('./ImageController')(app);
};
