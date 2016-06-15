const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
});

app.get('/', (req, res) => {
  res.json({notes: ['serverNote1', 'serverNote2']});
});

app.listen(8080, () => {
  console.log('up on 8080');
});
