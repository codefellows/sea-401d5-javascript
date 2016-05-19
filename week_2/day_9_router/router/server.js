const http = require('http');
const Router = require('./lib/router');
const router = new Router();

router.get('/note', (req, res) => {
  res.write('HIT ROUTE\n');
  res.end();
})

router.get('/cat', (req, res) => {
  res.send('MEOW\n');

})

http.createServer(router.route())
  .listen(3000, () => console.log('up on 3000'));