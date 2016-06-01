'use strict';
const express = require('express');
const Penguin = require('../schema/penguin');
const bodyParser = require('body-parser').json();
const jwtAuth = require('../lib/auth_middleware');

const penguinRouter = module.exports = exports = express.Router();

//since it doesn't have our auth middleware it's still available publicly
penguinRouter.get('/', (req, res) => {
  Penguin.find({}, (err, penguins) => {
    res.json({data: penguins});
  });
});

//every route that we put our auth middleware on will need a token to pass
penguinRouter.post('/', jwtAuth, bodyParser, (req, res) => {
  let newPenguin = new Penguin(req.body);

  newPenguin.save((err, penguin) => {
    res.json(penguin);
  });
});
