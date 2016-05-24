"use strict";
module.exports = (req, res, next) => {
  req.time = new Date();
  next();
};
