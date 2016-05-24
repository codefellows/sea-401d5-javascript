'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const firstRouter = express.Router();

app.use(jsonParser);

firstRouter.get('/', (req, res) => {
  res.send('GAAAW GAAW')
});

firstRouter.delete('/:id', (req, res) => {
  let message = `Poor penguin #${req.params.id} brutally murdered.`;
  res.send(message);
});

app.get('/', (req, res) => {
  res.send('IT GOT TO ME FIRST');
});

app.get('/', (req, res) => {
  console.log('route hit!')
  res.send('HELLO');
});

app.use('/penguins', firstRouter);

app.get('/:id', (req, res) => {
  let id = req.params.id;
  console.log('hello from id get route');
  res.json({message: id.toUpperCase()});
});

app.post('/', (req, res) => {
  console.log('post route hit!');
  console.log('Request Body:', req.body);
  res.json({message: 'Hello from post route'});
});

app.put('/', (req, res) => {
  console.log('put route hit!')
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write(JSON.stringify({message: 'Hello from put route'}));
  res.end();
});

app.delete('/', (req, res) => {
  console.log('delete route hit!');
  res.send('Hello from delete route');  
});

app.get('/*', (req, res) => {
  res.status(404).json({msg: 'not found'});
});

app.listen(3000, () => console.log('up on 3000'));






