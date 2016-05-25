const express = require('express');
const mongoose = require('mongoose');
const penguinRouter = require('./routes/penguin_routes');
const app = express();

//mongoose.connect starts the database. Don't forget to start the db server!
mongoose.connect('mongodb://localhost/dev');

//make our app aware of our routes with .use and set the base url for that router
app.use('/penguins', penguinRouter);

app.listen(3000);
