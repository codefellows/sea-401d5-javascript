'use strict';

module.exports = function(req, res, next) {
  let basicAuth = req.headers.authorization;
  let authString = basicAuth.split(' ').pop();
  let authBuff = new Buffer(authString, 'base64');
  let asciiAuth = authBuff.toString();
  let authArray = asciiAuth.split(':');
  authBuff.fill(0);

  req.auth = {
    username: authArray[0],
    password: authArray[1]
  };

  if(!req.auth.username || !req.auth.password) {
    return next(new Error('Username or Password missing'));
  }

  next();
}
