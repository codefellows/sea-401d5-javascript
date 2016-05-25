"use strict";

module.exports = (req, res, next) => {
  var accumJson = '';
  req.on('data', (data) => {
    accumJson += data.toString();
  });
  req.on('end', () => {
    try {
      var parsed = JSON.parse(accumJson);
      req.model.data = parsed;
      next();
      //req.body = parsed;
    } catch (e) {
      console.log(e);
      e.message = 'invalid jason';
      e.statusCode = 422;
      next(e);
    }
  });
};
