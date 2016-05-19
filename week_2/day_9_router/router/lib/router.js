'use strict';

const Router = module.exports = function() {
  this.routes = {};
};

Router.prototype.get = function(url, cb) {
  if(!this.routes.GET) this.routes.GET = {};
  this.routes.GET[url] = cb;
};

Router.prototype.post = function() {

};

Router.prototype.put = function() {

};

Router.prototype.delete = function() {

};

Router.prototype.route = function() {

  return function(req, res) {
    send(req, res);

    this.routes[req.method][req.url](req, res);
  }.bind(this);
}

function send(req, res) {
  res.send = function(str) {
    res.writeHead(200, {
      'Content-Type':'text/html'
    });
    res.write(str);
    res.end();
  }

}




