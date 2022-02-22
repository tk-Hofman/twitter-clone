/*const tweetMessages = [
  {message: "こんにちは", like: 2, id: "yosino"},
  {message: "こんばんわ", like: 90, id: "toki"},
  {message: "おはよう", like: 55, id: "jyo"},
  {message: "さよなら", like: 30, id: "tbris"},
  {message: "いただきます", like: 49, id: "oosaka"},
  {message: "ご馳走様です", like: 31, id: "javascript"}
];*/

  const sqlite3 = require('sqlite3').verbose();
  const db = new sqlite3.Database('./twitter.db');

  const http = require('http');
  const server = http.createServer((req,res) => {
    db.all('SELECT * FROM tweets', (err, rows) =>{
      if (err) {
          console.log(err);
          return;
      }
    res.writeHead(200, {'Content-Type' :'application/json'});
    res.end(JSON.stringify(rows),'utf-8');
    });
  });

  server.listen(4000);
