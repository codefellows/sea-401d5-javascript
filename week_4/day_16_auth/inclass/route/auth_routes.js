'use strict';
const express = require('express');
const bodyParser = require('body-parser').json();
const User = require('../model/user')

const router = module.exports = exports = express.Router();

router.post('/signup', bodyParser, (req, res, next) => {
  let newUser = new User(req.body);
  let hashedPassword = newUser.hashPassword();
  newUser.password = hashedPassword;
  req.body.password = null;
  User.findOne({username: req.body.username}, (err, user) => {
    if (err || user) return next(new Error('could not create user'));
    newUser.save((err, user) => {
      if (err) return next(new Error('could not create user'));
      res.json({token: 'token'});
    });
  });
});