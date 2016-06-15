require('express')()
  .use(require('express').static(__dirname + '/build'))
  .listen(3000, () => console.log('up on 3000'));
  