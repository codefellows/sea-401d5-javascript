'use strict';
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/build'));
var server = app.listen(3003, function(){
  console.log('server is running at %s', server.address().port);
});
