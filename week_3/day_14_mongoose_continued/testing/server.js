const express = require('express');
const app = express();
const mongoose = require('mongoose');
const errorHandler = require('./lib/error_handling')

const dbPort = process.env.MONGOLAB_URI || 'mongodb://localhost/dev_db';

mongoose.connect(dbPort);


const penguinRouter = require('./routes/penguin_routes');

app.use('/penguins', penguinRouter);

app.use(errorHandler);

app.listen(3000, () => {
  console.log('up on 3000');
});
