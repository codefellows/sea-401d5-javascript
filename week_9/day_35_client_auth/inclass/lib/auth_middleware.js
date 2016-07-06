'use strict';

const User  = require('../models/user');
const jwt   = require('jsonwebtoken');

module.exports = function(req, res, next) {
  let token = req.headers.token || req.body.token;

  let err = new Error('authentication failure');
  err.statusCode = 500;

  if (!token) return next(err);

  try {
    token = jwt.verify(token, process.env.SECRET || 'changeme');
  } catch(e) {
    return next(err);
  }

  User.findById(token._id, (e, user) => {
    if (e || !user) next(err);
    req.user = user;
    next();
  });
};
