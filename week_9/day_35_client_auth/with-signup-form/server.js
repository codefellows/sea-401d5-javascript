const express = require('express');
const mongoose = require('mongoose');
const penguinRouter = require('./routes/penguin_routes');
const userRouter = require('./routes/auth_routes');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.static('./build'));

mongoose.connect('mongodb://localhost/dev');

app.use('/penguins', penguinRouter);
app.use('/', userRouter);

app.use((err, req, res, next) => {
  res.status(500).json({message: err.message});
  next(err);
});

module.exports = app.listen(3000);
