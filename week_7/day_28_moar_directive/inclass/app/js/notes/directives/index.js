module.exports = function(app) {
  require('./note_directive')(app);
  require('./todo')(app);
  require('./dummy')(app);
};