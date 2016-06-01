'use strict';

const User  = require('../schema/user');
const jwt   = require('jsonwebtoken');

module.exports = function(req, res, next) {
  //usually we'll want the token on the headers, but if it ends up
  //on the body we'll snag it here.
  let token = req.headers.token || req.body.token;

  //set up an error to pass off to our error handling in our server
  let err = new Error('authentication failure');
  err.statusCode = 500;

  //if there's no token authentication fails. Pass the error to next.
  if (!token) return next(err);

  //here we try to decrypt the token. If that fails that constitutes an
  //authentication failure. This is where it'll get caught if the app
  //secret is compromised.
  try {
    token = jwt.verify(token, process.env.SECRET || 'changeme');
  } catch(e) {
    return next(err);
  }

  User.findById(token._id, (e, user) => {
    //next point of failure is if the user is actually in the database
    if (e || !user) next(err);
    //if it passes all three of these checks we send along our user on
    //the request
    req.user = user;
    next();
  });
};
