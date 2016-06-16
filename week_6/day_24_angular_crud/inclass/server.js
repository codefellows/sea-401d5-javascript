'use strict';
const express = require('express');

express().use(express.static(__dirname + '/build'))
  .listen(8080, () => console.log('up on 8080'));
