'use strict';
const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/note') {
    fs.readdir(__dirname + '/data', (err, data) => {
      if (err) return res.end("err");
      res.writeHead(200, {
        'Content-Type':'application/json'
      });
      res.write(JSON.stringify(data));
      return res.end();

    });
  }

  if (req.method === 'POST' && req.url === '/note') {
    fs.readdir(__dirname + '/data', (err, data) => {
      if (err) return res.end('err');

      let fileName = data.length + '.json';
      req.on('data', (data) => {
        fs.writeFile(__dirname + '/data/' + fileName, data, (err) => {
          res.end();
        });
      });
    });
  }
}).listen(3000, () => console.log('up on 3000'));

