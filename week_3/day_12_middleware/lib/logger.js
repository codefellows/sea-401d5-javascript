"use strict";

module.exports = (req, res, next) => {
  console.log("REQUEST", req.time, req.url);
  next();
};
