const net = require('net');

const client = net.connect(3000, () => {
  // client.on('data', (data) => {
  //   client.write('MESSAGE RECEIVED');
  // })
  client.write('HERE IS MESSAGE');
})