"use strict";
const express = require('express');
const jsonModelParser = require('./lib/jsonModelParser');
const timekeeper = require('./lib/timekeeper');


const app = express();

var routerGetData = new express.Router();
var routerSetData = new express.Router();

const model = {
  nodata: {
    msg: "No model"
  }
};

//get model on rec

app.use((req, res, next) => {
  req.model = model;
  next();
});

//time on req
app.use(timekeeper);
// app.use((req, res, next) => {
//   req.time = new Date();
//   next();
// });

//logger
app.use((req, res, next) => {
  console.log("REQUEST", req.time, req.url);
  next();
});

routerGetData.get("/", (req, res) => {
  res.type("json");
  //res.set("Content-type", "application/json");
  if (req.model.data) {
    res.json(req.model.data);
  } else {
    res.json(req.model.nodata);
  }
});

routerSetData.use(jsonModelParser);

routerSetData.post("/", (req, res) => {
  res.type("json");
  res.json({
    msg: 'valid json',
    data: req.model.data
  });
})


app.use("/api", routerGetData);
app.use("/api", routerSetData);


//default middleware error handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.statusCode || 500).json({
    msg: err.message
  });
})

app.use((req, res) => {
  res.status(404).json({
    msg: "page not found"
  })
});

app.listen(3000, () => {
  console.log("server up on 3000")
});
