'use strict';
const express     = require('express');
const app         = express();
const mongoose    = require('mongoose');
const bodyParser  = require('body-parser').json();
const cors        = require('cors');

const Note = mongoose.model('notes', new mongoose.Schema({
  body: String
}));

mongoose.connect('mongodb://localhost/dev_db'); 

app.use(cors());

app.get('/', (req, res, next) => {
  Note.find((err, data) => {
    if (err) return next(err);

    res.json({data: data});
  });
});

app.post('/', bodyParser, (req, res, next) => {
  let newNote = new Note(req.body);

  newNote.save((err, data) => {
    if (err) return next(err);

    res.json(data);
  });
});

app.put('/', bodyParser, (req, res, next) => {
  let _id = req.body._id;

  Note.findOneAndUpdate({_id}, req.body, (err) => {
    if (err) return next(err);

    res.json({data: 'successfully updated'});
  });
});

app.delete('/:id', (req, res, next) => {
  let _id = req.params.id;

  Note.findOneAndRemove({_id}, (err) => {
    if (err) return next(err);

    res.json({message: 'successfully deleted'});
  });
});

app.use((req, res) => {
  console.log('hit end');
  res.status(404).json({message: 'route not found'});
}).use((err, req, res, next) => {
  res.status(500).json({message: err.message});
  next(err);
});

app.listen(3000);
