
"use strict";
const http = require('http');

const a = {day:1};

http.createServer((req,res)=>{

  console.log("day",a.day++);
  res.end("done\n");

}).listen(3000, ()=>{console.log("server up at 3000");});
