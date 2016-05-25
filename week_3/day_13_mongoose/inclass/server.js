'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const Penguin = require('./schema/penguin');
const mongoose = require('mongoose');
const morgan = require('morgan');

app.use(morgan('dev'));

mongoose.connect('mongodb://localhost/dev_db');

// const marty = new Penguin({name: 'marty'});
// marty.save((err, data) => {

// });

app.get('/penguins', (req, res) => {
  Penguin.find({}, (err, data) => {
    if (err) return res.json({message: err.message});
    res.json(data);
  });
});

app.post('/penguins', jsonParser, (req, res) => {
  let newPenguin = new Penguin(req.body);
  newPenguin.save((err, data) => {
    if (err) return res.json({message: err.message});
    res.json(data);
  });
});

app.put('/penguins', jsonParser, (req, res) => {
  Penguin.findOneAndUpdate({_id: req.body._id}, req.body, (err, data) => {
    if (err) return res.json({message: err.message});
    res.json(data);
  })
});

app.delete('/penguins/:id', (req, res) => {
  let _id = req.params.id;
  //{_id} === {_id: _id}
  Penguin.findOneAndRemove({_id}, null, (err, data) => {
    if (err) return res.json({message: err.message});
    res.send('deleted penguin with id: ' + req.params.id);
  })

});

app.listen(3000, () => {
  console.log('up on 3000');
});