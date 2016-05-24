const express = require('express');
const fs = require('fs');
const logger = require('./lib/logger');
const jsonParser = require('./lib/json-parser');

const app = express();

var routerGetData = express.Router();
var routerSetData = express.Router();
var fileRouter = express.Router();


//our model with a default nodata message
const model = {
  nodata: {
    msg: "No model"
  }
};

//add time to request for all requests
app.use((req, res, next) => {
  req.time = new Date();
  next();
});

//add model to req so it can be handed off to other middle ware
app.use((req, res, next) => {
  req.model = model;
  next();
});

//log all requests
app.use(logger);
//move code to lib
// app.use((req, res, next) => {
//   console.log("REQUEST", req.time, req.url);
//   next();
// })

//Set data uses middleware to parse JSON and set body and model
routerSetData.use(jsonParser);
// routerSetData.use((req, res, next) => {
//   var incJson = '';
//   req.on('data', (data) => {
//     incJson += data.toString();
//   });
//   req.on('end', () => {
//     try {
//       var parsed = JSON.parse(incJson);
//       req.body = parsed;
//       req.model.data = parsed;
//
//     } catch (e) {
//       //console.log(e);
//       e.message = 'invalid json';
//       e.statusCode = 422;
//       return next(e);
//     }
//     next();
//   });
// });

// / GET looks for model and retursn
routerGetData.get('/', (req, res) => {
  res.set("json");
  if (req.model.data) {
    res.send(req.model.data);
  } else {
    res.send(req.model.nodata);
  }
});

routerSetData.post('/', (req, res) => {
  res.set("json");
  res.json({
    msg: 'valid data',
    data: req.body
  });
})

//Read a file from public directory
fileRouter.get(['/files', '/files/:filename'], (req, res, next) => {
  var filePath = __dirname + '/public/' + req.params.filename;
  fs.stat(filePath, (err, stats) => {
    if (err) {
      err.message = "Could not locate static file";
      err.statusCode = 400;
      return next(err);
    }
    fs.createReadStream(filePath).pipe(res);
  });
});

fileRouter.post('/files/:filename', (req, res, next) => {
  req.pipe(fs.createWriteStream(__dirname + '/public/' + req.params.filename));
  next();
}, (req, res) => {
  res.json({
    msg: 'successfully stored'
  });
});

app.use('/api', fileRouter);
app.use('/api', routerGetData);
app.use('/api', routerSetData);
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.statusCode || 500).json({
    msg: err.message
  });
});


app.use((req, res) => {
  res.status(404).json({
    msg: 'page not found'
  });
});
app.listen(3000, () => console.log('server up on 3000'));
