'use strict';
const http = require('http');

const database = {};

http.createServer((req, res) => {
  if (req.url === '/HELLO' && req.method === 'GET') {

    res.write('HI\n');
    return res.end();
  }

  if(req.url === '/user' && req.method === 'GET') {
    let users = Object.keys(database).toString() + '\n';
    res.write(users);
    return res.end();
  }

  if (req.method === 'POST') {
    let newEntry = 'user' + Date.now();
    database[newEntry] = true;
    return res.end();
  }
  res.writeHead(404, {
    'Content-Type': 'text/html'
  })
  res.write('NOT FOUND');
  res.end();

}).listen(3000);
