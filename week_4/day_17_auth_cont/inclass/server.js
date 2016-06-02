'use strict';
const app = require('express')();
const mongoose = require('mongoose');
const authRouter = require('./route/auth_routes');
const bodyParser = require('body-parser').json();
const jwtAuth = require('./lib/jwt_auth');

mongoose.connect('mongodb://localhost/dev_db');

app.use('/', authRouter);

app.get('/test', (req, res) => {
  res.send('don\'t need a token');
});

app.post('/test', bodyParser, jwtAuth, (req, res) => {
  res.json({message:'need a token', user: req.user});
});

app.use((err, req, res, next) => {
  res.status(500).json({message: err.message});
  next(err);
});

app.listen(3000);
