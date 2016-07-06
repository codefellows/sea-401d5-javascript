'use strict';

module.exports = function(req, res, next) {

  try {
    let basicAuth = req.headers.authorization;
    let authString = basicAuth.split(' ')[1];
    let authBuff = new Buffer(authString, 'base64');
    let asciiAuth = authBuff.toString();
    let authArray = asciiAuth.split(':');
    authBuff.fill(0);
    req.auth = {
      username: authArray[0],
      password: authArray[1]
    }; 
  } catch (e) {
    return next(e);
  }

  if (!req.auth.username.length || !req.auth.password.length) {
    return next(new Error('Username or Password Empty'));
  }

  next();
};
