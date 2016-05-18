"use strict";
const http = require('http');
const fs = require('fs');
const stream = require('stream');

http.createServer((req, res) => {
  //TODO res error

  //TODO req error

  //TODO GET
  if (req.url === '/' && req.method === "GET") {
    //read File

    //TODO file not found

    let file = fs.createReadStream(__dirname + '/data/data.json');
    file.pipe(res);

    //send data back

  } else if (req.url === "/" && req.method === 'POST') {

    // capture the data

    let bufArr = [];
    let bufStr = '';
    req.on('data', (data) => {
      bufArr.push(data);
      bufStr += data.toString();
    });

    req.on('end', () => {
      //start processing

      //validation
      let str = bufArr.toString(); //array of buffers to string
      let jsonObj = {};
      try {
        jsonObj = JSON.parse(str);
      } catch (e) {
        //tell client we have error
        res.statusCode = 400;
        res.write("Use json");
        //log error
        console.log("error validating");
      }


      //TODO error handling file write
      let file = fs.createWriteStream(__dirname + '/data/data.json');
      let bufferStream = new stream.PassThrough();
      let inBuf = new Buffer(bufStr);
      bufferStream.end(inBuf);
      bufferStream.pipe(file);

      res.statusCode = 200;
      res.end("data written to file\n");


    });



    // validate json


    // write to file


  } else {
    //TODO deal with not found
    res.status = 404;
    res.end("File not found\n");

  }





}).listen(3000, () => {
  console.log("server up at 3000");
});
