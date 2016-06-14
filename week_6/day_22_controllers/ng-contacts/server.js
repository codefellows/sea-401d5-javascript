var express = require('express');
var static  = require('express-static');

var app = express();

app.use(static(__dirname + '/build'));

var server = app.listen(3001, function(){
  console.log('server is running at %s', server.address().port);
});
