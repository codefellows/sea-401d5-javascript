const cowsay = require('cowsay-browser');
module.exports = function(app) {
  app.factory('CowsayService', function() {
    const service = {};
    service.test = 'test string from CowsayService';
    service.testCow = cowsay.say({text: 'test moooooo'});
    service.makeCow = function(text, file) {
      file = file || 'bud-frogs';
      text = text || 'default moo';
      return cowsay.say({text, f:file});
    };

    return service;
  });
};
