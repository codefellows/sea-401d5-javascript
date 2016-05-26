'use strict';
const express = require('express');
const bodyParser = require('body-parser').json();
const Penguin = require('../schema/penguin');

const router = module.exports = exports = express.Router();

router.get('/', (req, res, next) => {
  Penguin.find({}, (err, penguins) => {
    if (err) return next(err);
    res.json(penguins);
  });
});

router.post('/', bodyParser, (req, res, next) => {
  let newPenguin = new Penguin(req.body);
  newPenguin.save((err, penguin) => {
    if (err) return next(err);
    res.json(penguin);
  });
});

router.put('/', bodyParser, (req, res, next) => {
  let _id = req.body._id;
  // {_id} === {_id: _id}
  Penguin.findOneAndUpdate({_id}, req.body, (err, penguin) => {
    if (err) return next(err);
    let message = 'successfully updated';
    res.json({message});
  });
});

router.delete('/:id', (req, res, next) => {
  let _id = req.params.id;
  Penguin.findOneAndRemove({_id}, (err, penguin) => {
    if (err) return next(err);
    let message = 'successfully deleted';
    res.json({message})
  });
}); 












