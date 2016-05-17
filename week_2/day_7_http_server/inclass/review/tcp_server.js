const net = require('net');

const sockets = [];

net.createServer((socket) => {
  sockets.push(socket);
  socket.on('data', (data) => {
    broadcast(data.toString(), socket);
  });

  function broadcast(message, socket) {
    sockets.forEach((s) => {
      if (s === socket) return;
      s.write(message);
    });
  }
}).listen(3000);
