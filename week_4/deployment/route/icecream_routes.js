'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const IceCream = require('../model/icecream');

const iceCreamRouter = module.exports = exports = express.Router();

iceCreamRouter.get('/', (req, res, next) => {
  IceCream.find({}, (err, icecream) => {
    if(err) return next(err);
    res.json(icecream);
  });
});

iceCreamRouter.post('/', jsonParser, (req, res, next) => {
  let newIceCream = new IceCream(req.body);
  newIceCream.save((err, icecream) => {
    if(err) return next(err);
    res.json(icecream);
  });
});

iceCreamRouter.put('/', jsonParser, (req, res, next) => {
  let _id = req.body._id;
  console.log('looking for id and req.body', _id, req.body);
  IceCream.findOneAndUpdate({_id: _id}, req.body, (err, icecream) => {
    if(err) return next(err);
    let message = 'successfully updated';
    res.json({message:message, data:icecream});
  });
});

iceCreamRouter.delete('/:id', (req, res, next) => {
  let _id = req.params.id;
  IceCream.findOneAndRemove({_id: _id}, (err, icecream) => {
    if(err) return next(err);
    let message = 'successfully deleted';
    res.json({message:message, data:icecream});
  });
});
