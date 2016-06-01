'use strict';

module.exports = function(req, res, next) {
  //auth info is stored in the headers as 'Basic username:password'
  //the username and password will be in base64
  try {
    let basicAuth = req.headers.authorization;
    //get just the base64 string by spliting at the space
    let authString = basicAuth.split(' ')[1];
    //use a buffer to store the base64 string so that we can translate it to utf-8
    let authBuff = new Buffer(authString, 'base64');
    let asciiAuth = authBuff.toString();
    //we should have a string username:password at this point
    //so we can get the individual values by splitting at :
    let authArray = asciiAuth.split(':');
    authBuff.fill(0);
    req.auth = {
      username: authArray[0],
      password: authArray[1]
    }; 
  } catch (e) {
    //handle error for nonexistant auth headers
    return next(e);
  }

  //pass along these values on the request
  //if one is missing send back an error
  if (!req.auth.username.length || !req.auth.password.length) {
    return next(new Error('Username or Password Empty'));
  }

  next();
};
