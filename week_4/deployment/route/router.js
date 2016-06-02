'use strict';
const express = require('express');
const myRouter = express.Router();

myRouter.get('/:id', (req, res) => {
  let id = req.params.id;
  res.json({message: id.toUpperCase()});
});

myRouter.post('/', (req, res) => {
  console.log('post is doing something');
  res.json({message: 'post success'});
});

myRouter.put('/', (req, res) => {
  res.json({message: 'put success'});
});

myRouter.patch('/', (req, res) => {
  res.json({message: 'patch success'});
});

myRouter.delete('/', (req, res) => {
  res.json({message: 'delete success'});
});
