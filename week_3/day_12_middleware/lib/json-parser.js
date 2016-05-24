"use strict";

module.exports = (req, res, next) => {
  var incJson = '';
  req.on('data', (data) => {
    incJson += data.toString();
  });
  req.on('end', () => {
    try {
      var parsed = JSON.parse(incJson);
      req.body = parsed;
      req.model.data = parsed;

    } catch (e) {
      //console.log(e);
      e.message = 'invalid json';
      e.statusCode = 422;
      return next(e);
    }
    next();
  });
}
