  const sqlite3 = require('sqlite3').verbose();
  const db = new sqlite3.Database('./twitter.db');
  const http = require('http'); 
  let newId = "";
  const server = http.createServer((req,res) => {
    if(req.url === '/message') {
      if(req.method === 'POST') {
        let newMessage = '';
        req.on('data', function(chunk) {
          newMessage += chunk;
        })
        .on('end',function() {
          const newTweetMessage = JSON.parse(newMessage);
          db.run("insert into tweets(message,like,user_id) values(?,?,?)", [newTweetMessage.message,0,newTweetMessage.userId],function(err) {
            if (db.get(`SELECT * FROM tweets where message=null or user_id=null`)) {
              res.writeHead(400, {'Content-Type':'application/json; charset=UTF-8','Access-Control-Allow-Origin': '*',"Vary": "Accept-Encoding"});
              const errMessage = "メッセージまたはUSER IDを入力してください"
              res.end((errMessage));
            }
            else if (err) {
              return console.log(err);
            }
            newId = this.lastID;
            db.get(`SELECT * FROM tweets where id=${newId}`, (err, rows) =>{
              if (err) {
                const responseBody = JSON.stringify(err);
                res.writeHead(500, {'Content-Type':'application/json; charset=UTF-8','Access-Control-Allow-Origin': '*','Content-Length': Buffer.byteLength(responseBody),"Vary": "Accept-Encoding"});
                return res.end(responseBody,'utf-8');
              } 
              else {
                const responseBody = JSON.stringify(rows)
                res.writeHead(200,{'Content-Type':'application/json; charset=UTF-8','Access-Control-Allow-Origin': '*','Content-Length': Buffer.byteLength(responseBody),"Vary": "Accept-Encoding"});
                res.end(responseBody,'utf-8');
              }
            });
          });     
        })
      } else if (req.method === 'GET') {
        db.all('SELECT * FROM tweets', (err, rows) =>{
          if (err) {
            const responseBody = JSON.stringify(err);
            res.writeHead(500, {'Content-Type':'application/json; charset=UTF-8','Access-Control-Allow-Origin': '*','Content-Length': Buffer.byteLength(responseBody),"Vary": "Accept-Encoding"});
            return res.end(responseBody,'utf-8');
          }  else {
              const responseBody = JSON.stringify(rows)
              res.writeHead(200,{'Content-Type':'application/json; charset=UTF-8','Access-Control-Allow-Origin': '*','Content-Length': Buffer.byteLength(responseBody),"Vary": "Accept-Encoding"});
              res.end(responseBody,'utf-8');
            }
        });
      }
    }  else {
        let getAccessUrlSplit = req.url.split("/");
        if (req.method === 'GET') {
          db.get(`SELECT * FROM tweets where id=${getAccessUrlSplit[2]}`, (err, rows) =>{
            if (err) {
              const responseBody = JSON.stringify(err);
              res.writeHead(500, {'Content-Type':'application/json; charset=UTF-8','Access-Control-Allow-Origin': '*','Content-Length': Buffer.byteLength(responseBody),"Vary": "Accept-Encoding"});
              return res.end(responseBody,'utf-8');
            } 
            else if (db.get(`SELECT * FROM tweets where id=null`)) {
              res.writeHead(404,{'Content-Type':'application/json; charset=UTF-8','Access-Control-Allow-Origin': '*',"Vary": "Accept-Encoding"});
              res.end();
            }
            else {
              const responseBody = JSON.stringify(rows)
              res.writeHead(200,{'Content-Type':'application/json; charset=UTF-8','Access-Control-Allow-Origin': '*','Content-Length': Buffer.byteLength(responseBody),"Vary": "Accept-Encoding"});
              res.end(responseBody,'utf-8');
            }
          });
        } else if (req.method === 'DELETE') {
          db.run(`delete from tweets where id=${getAccessUrlSplit[2]}`, (err) => {
            if (err) {
              console.log(err);
            } 
            else if (db.get(`SELECT * FROM tweets where id=null`)) {
              res.writeHead(404,{'Content-Type':'application/json; charset=UTF-8','Access-Control-Allow-Origin': '*',"Vary": "Accept-Encoding"});
              res.end();
            }
            else {
              const responseBody = getAccessUrlSplit[2]
              res.writeHead(200, {'Content-Type':'application/json; charset=UTF-8','Access-Control-Allow-Origin': '*','Content-Length': Buffer.byteLength(responseBody),"Vary": "Accept-Encoding"});
              res.end(responseBody,'utf-8');
            }
          });
        } else if (req.method === 'PUT') {
            let newMessage = '';
            req.on('data', function(chunk) {
              newMessage += chunk;
            })
            .on('end',function() {
              const newTweetMessage = JSON.parse(newMessage);
              db.run(`UPDATE tweets SET message = ? WHERE id=${getAccessUrlSplit[2]}`,[newTweetMessage.message], function(err) {
                if (db.get(`SELECT * FROM tweets where message=null and user_id=null`)) {
                  res.writeHead(400,{'Content-Type':'application/json; charset=UTF-8','Access-Control-Allow-Origin': '*',"Vary": "Accept-Encoding"});
                  const errMessage = 'メッセージとUSER IDを入力してください';
                  res.end(errMessage);
                }
                else if (err) {
                  console.log(err);
                } 
                else if (db.get(`SELECT * FROM tweets where id=null`)) {
                  res.writeHead(404,{'Content-Type':'application/json; charset=UTF-8','Access-Control-Allow-Origin': '*',"Vary": "Accept-Encoding"});
                  res.end();
                }
                else {
                  const responseBody = newMessage;
                  res.writeHead(200, {'Content-Type':'application/json; charset=UTF-8','Access-Control-Allow-Origin': '*','Content-Length': Buffer.byteLength(responseBody),"Vary": "Accept-Encoding"});
                  res.end(responseBody,'utf-8');
                }
              });
            });
          }
     } 
  });
  server.listen(4000);