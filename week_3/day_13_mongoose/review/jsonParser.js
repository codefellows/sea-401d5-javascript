'use strict';

function parser(req, res, next) {
  let addChunks = '';

  req.on('data', (chunk) => {
    addChunks += chunk.toString();
  });

  req.on('end', () => {
    try {
      req.body = JSON.parse(addChunks);
      next();
    } catch(err) {
      console.log('Error in catch block', err, err.message);
      err.message = 'invalid json';
      err.statusCode = 422;
      next(err);
    }
  });
};

module.exports = parser;
