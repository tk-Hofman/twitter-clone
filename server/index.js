var http = require('http');
var server = http.createServer((req,res) => {
  res.end('Hello World');
});

server.listen(4000);
