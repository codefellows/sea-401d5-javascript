module.exports = function(app) {
  require('./man_united_form')(app);
  require('./barca_form')(app);
  require('./barca_list')(app);
  require('./man_united_list')(app);
  require('./barca_new_player_form')(app);
    require('./man_united_new_player_form')(app);
};
