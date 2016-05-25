'use strict';
const express = require('express');
const app = express();
const jsonParser = require('./jsonParser');

app.get('/', (req, res, next) => {
  let err = new Error('MIDDLEWARE ERROR');
  next(err);
}, (req, res, next) => {
  req.message = 'HI FROM SECOND MIDDLEWARE';
  next();
},(req, res, next) => {
  console.log(next);
  res.send(req.message);
});

app.post('/', jsonParser, (req, res) => {
  console.log(req.body);
  res.send('json parsed');
});

app.use((err, req, res, next) => {
  res.send(err.message);
});

app.listen(3000, () => {
  if(!process.env.TEST_MODE) console.log('up on 3000');
});








