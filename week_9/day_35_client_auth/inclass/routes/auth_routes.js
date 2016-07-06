'use strict';
const User    = require('../models/user');
const bodyParser = require('body-parser').json();
const basicHTTP = require('../lib/basic_http');

const userRouter = module.exports = exports = require('express').Router();

userRouter.post('/signup', bodyParser, (req, res) => {
  let newUser = new User(req.body);

  newUser.password = newUser.hashPassword();
  newUser.save((err, data) => {
    let token = data.generateToken();

    res.json({token});
  });
});

userRouter.post('/signin', basicHTTP, (req, res, next) => {
  User.findOne({username: req.auth.username}, (err, user) => {
    if (err || !user) return next(new Error('Authentication error'));
    if (!user.comparePassword(req.auth.password)) return next(new Error('Auth error'));

    res.json({token: user.generateToken()});
  });
});
