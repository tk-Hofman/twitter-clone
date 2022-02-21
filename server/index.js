const tweetMessages = [
  {message: "こんにちは", like: 2, id: "yosino"},
  {message: "こんばんわ", like: 90, id: "toki"},
  {message: "おはよう", like: 55, id: "jyo"},
  {message: "さよなら", like: 30, id: "tbris"},
  {message: "いただきます", like: 49, id: "oosaka"},
  {message: "ご馳走様です", like: 31, id: "javascript"}
];


var http = require('http');
var server = http.createServer((req,res) => {
  res.writeHead(200, {'Content-Type' :'application/json'});
  res.end(JSON.stringify(tweetMessages),'utf-8');
});

server.listen(4000);
