const express = require('express');
const mongoose = require('mongoose');
const penguinRouter = require('./routes/penguin_routes');
const userRouter = require('./routes/auth_routes');
const app = express();

mongoose.connect('mongodb://localhost/dev');

app.use('/penguins', penguinRouter);
app.use('/', userRouter);

app.use((err, req, res, next) => {
  res.json({message: err.message}).status(500);
  next(err);
});

app.listen(3000);
