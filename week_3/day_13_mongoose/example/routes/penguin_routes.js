'use strict';
const express = require('express');
const Penguin = require('../schema/penguin');
const bodyParser = require('body-parser').json();

const penguinRouter = module.exports = exports = express.Router();

penguinRouter.get('/', (req, res) => {
  //find takes a query object and a callback. The callback gets passed
  //an error if any and the data. Find returns an array of results.
  Penguin.find({}, (err, penguins) => {
    res.json({data: penguins});
  });
});

penguinRouter.post('/', bodyParser, (req, res) => {
  //our schema also acts as a constructor for new documents.
  let newPenguin = new Penguin({name: req.body.name});

  //the instance it creates has a method save that adds it to the db.
  //it takes a callback that gets passed an error if any and the new record.
  newPenguin.save((err, penguin) => {
    res.json(penguin);
  });
});

penguinRouter.put('/', bodyParser, (req, res) => {
  let _id = req.body._id
  //find by id will find a record by the _id field
  Penguin.update({_id}, req.body, (err, data) => {
    //data in this case is a record of the update.
    //So sending it back isn't very helpful.
    if(err) return res.json({message: 'error updating'});
    res.json({message: 'successfully updated'});
  });
});

penguinRouter.delete('/:id', (req, res) => {
  let _id = req.params.id;
  Penguin.findOneAndRemove({_id}, (err, data) => {
    if (err) return res.json({message: 'error deleting'});
    res.json({message: 'successfully deleted'});
  });
});
