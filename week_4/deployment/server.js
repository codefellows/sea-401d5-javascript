'use strict';

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const errorHandler = require('./lib/error_handling');

const dbPort = process.env.MONGODB_URI || 'mongodb://localhost/dev_db';
console.log('dbPort', dbPort);
mongoose.connect(dbPort);

const iceCreamRouter = require('./route/icecream_routes');
const milkShakeRouter = require('./route/milkshake_routes');

app.use(morgan('dev'));
app.use('/icecream', iceCreamRouter);
app.use('/milkshake', milkShakeRouter);

app.use(errorHandler);

app.use((req, res) => {
  res.status(404).json({message: 'not found'});
});


app.listen(process.env.PORT || 3000, () => {
  console.log('up on '+ process.env.PORT || 3000);
});
