'use strict';
const User    = require('../schema/user');
const bodyParser = require('body-parser').json();
const basicHTTP = require('../lib/basic_http');

const userRouter = module.exports = exports = require('express').Router();

//sign up is our 'create user'
userRouter.post('/signup', bodyParser, (req, res) => {
  let newUser = new User(req.body);
  //before we store a user we hash the password so it's not stored
  //in plain text anywhere.
  newUser.password = newUser.hashPassword();
  newUser.save((err, data) => {
    //send back a token. A user having a token is effectively what signs them in
    let token = data.generateToken();
    res.json({token});
  });
});

userRouter.post('/signin', basicHTTP, (req, res, next) => {
  //look up the user based on what was sent in the auth
  User.findOne({username: req.auth.username}, (err, user) => {
    if (err || !user) return next(new Error('Authentication error'));
    //compare password hashes the sent password and 
    if (!user.comparePassword(req.auth.password)) return next(new Error('Auth error'));


    res.json({token: user.generateToken()});
  });
});
