const express = require('express');
const app = express();

const penguinRouter = require('./routes/penguin_routes');

app.use('/penguins', penguinRouter);

app.use((err, req, res, next) => {
  res.status(500).json({message: err.message});
});
