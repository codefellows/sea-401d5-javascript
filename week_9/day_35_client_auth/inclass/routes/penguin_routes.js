'use strict';
const express = require('express');
const Penguin = require('../models/penguin');
const bodyParser = require('body-parser').json();
const jwtAuth = require('../lib/auth_middleware');

const penguinRouter = module.exports = exports = express.Router();

penguinRouter.get('/', (req, res) => {
  Penguin.find({}, (err, penguins) => {
    res.json({data: penguins});
  });
});

penguinRouter.post('/', bodyParser, jwtAuth, (req, res) => {
  let newPenguin = new Penguin(req.body);

  newPenguin.save((err, penguin) => {
    res.json(penguin);
  });
});
