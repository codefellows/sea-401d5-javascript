const app = require('express')();


app.((err, req, res, next) => {
  res.status(500).json({message: err.message});
});

app.listen(3000);
