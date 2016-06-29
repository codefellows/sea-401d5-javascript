module.exports = function(app) {
  require('./notes_controller')(app);
  require('./error_controller')(app);
};
