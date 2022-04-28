  const {setDb} = require("./infra/db")
  setDb("./twitter.db");
  const {getAllTweet} = require("./infra/getAllTweet");
  const {getTweet} = require("./infra/getTweet")
  const sqlite3 = require('sqlite3').verbose();
  const db = new sqlite3.Database('./twitter.db');
  const http = require('http'); 
  let newId = "";
  const server = http.createServer(async (req,res) => {
    if(req.url === '/message') {
      if(req.method === 'POST') {
        let newMessage = '';
        req.on('data', function(chunk) {
          newMessage += chunk;
        })
        .on('end',function() {
          const newTweetMessage = JSON.parse(newMessage);
          if (newTweetMessage.user_id === undefined || newTweetMessage.message === undefined ) {
            res.writeHead(400, {'Content-Type':'application/json; charset=UTF-8','Access-Control-Allow-Origin': '*',"Vary": "Accept-Encoding"});
            const errMessage = "メッセージまたはUSER IDを入力してください"
            res.end((errMessage));
          }
          db.run("insert into tweets(message,like,user_id,created_at) values (?,?,?,strftime('%s', 'now'))", [newTweetMessage.message,0,newTweetMessage.user_id],function(err)
           {
            if (err) {
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
                const responseData = {
                  id: rows.id,
                  message: rows.message,
                  like: rows.like, 
                  createdAt: rows.created_at,
                  userId: rows.user_id
                };
                const responseBody = JSON.stringify(responseData)
                res.writeHead(200,{'Content-Type':'application/json; charset=UTF-8','Access-Control-Allow-Origin': '*','Content-Length': Buffer.byteLength(responseBody),"Vary": "Accept-Encoding"});
                res.end(responseBody,'utf-8');
              }
            });
          });     
        })
      } else if (req.method === 'GET') {
        try {
          const responseTweets = await getAllTweet(); 
          const responseBody = JSON.stringify(responseTweets)
          res.writeHead(200,{'Content-Type':'application/json; charset=UTF-8','Access-Control-Allow-Origin': '*','Content-Length': Buffer.byteLength(responseBody),"Vary": "Accept-Encoding"});
          res.end(responseBody,'utf-8');
        }
        catch (err) {
          const responseBody = JSON.stringify(err);
          res.writeHead(500, {'Content-Type':'application/json; charset=UTF-8','Access-Control-Allow-Origin': '*','Content-Length': Buffer.byteLength(responseBody),"Vary": "Accept-Encoding"});
          return res.end(responseBody,'utf-8');
        }
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
            else if (rows === undefined) {
              res.writeHead(404,{'Content-Type':'application/json; charset=UTF-8','Access-Control-Allow-Origin': '*',"Vary": "Accept-Encoding"});
              res.end();
            }
            else {
              const responseData = {
                id: rows.id,
                message: rows.message,
                like: rows.like,
                createdAt: rows.created_at,
                userId: rows.user_id
              };
              const responseBody = JSON.stringify(responseData)
              res.writeHead(200,{'Content-Type':'application/json; charset=UTF-8','Access-Control-Allow-Origin': '*','Content-Length': Buffer.byteLength(responseBody),"Vary": "Accept-Encoding"});
              res.end(responseBody,'utf-8');
            }
          });
        } else if (req.method === 'DELETE') {
            if (getAccessUrlSplit[2] === undefined) {
              res.writeHead(400,{'Content-Type':'application/json; charset=UTF-8','Access-Control-Allow-Origin': '*',"Vary": "Accept-Encoding"});
              const errMessage = "リクエストにツイートIDが存在しません"
              res.end(errMessage);
              return
            }
          db.run(`delete from tweets where id=${getAccessUrlSplit[2]}`, function (err)  {
            if (err) {
              console.log(err);
              return
            } 
            else if (this.changes === 0) {
              res.writeHead(404, {'Content-Type':'application/json; charset=UTF-8','Access-Control-Allow-Origin': '*',"Vary": "Accept-Encoding"});
              const errMessage = "ツイートが見つかりません";
              res.end(errMessage);
              return
            }
            else {
              const responseId = {
                id:  getAccessUrlSplit[2]
              };
              const responseBody = JSON.stringify(responseId);
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
              if (getAccessUrlSplit[2] === undefined) {
                res.writeHead(400,{'Content-Type':'application/json; charset=UTF-8','Access-Control-Allow-Origin': '*',"Vary": "Accept-Encoding"});
                const errMessage = 'tweet IDが見つかりません';
                res.end(errMessage);
                return
              }
              else if (newTweetMessage.message === undefined && newTweetMessage.userId ===undefined) { 
                res.writeHead(400,{'Content-Type':'application/json; charset=UTF-8','Access-Control-Allow-Origin': '*',"Vary": "Accept-Encoding"});
                const errMessage = 'メッセージとUSER IDを入力してください';
                res.end(errMessage);
                return
              }
              db.run(`UPDATE tweets SET message = ? WHERE id=${getAccessUrlSplit[2]}`,[newTweetMessage.message], function(err,rows) {
                if (err) {
                  console.log(err);
                  res.writeHead(500, {'Content-Type':'application/json; charset=UTF-8','Access-Control-Allow-Origin': '*','Content-Length': Buffer.byteLength(responseBody),"Vary": "Accept-Encoding"});
                  res.end();
                  return
                } 
                else if (this.changes === 0) {
                  res.writeHead(404, {'Content-Type':'application/json; charset=UTF-8','Access-Control-Allow-Origin': '*',"Vary": "Accept-Encoding"});
                  const errMessage = "ツイートが見つかりません";
                  res.end(errMessage);
                  return
                }
                else {
                  const responsePutMessage = {
                    message: newTweetMessage.message
                  };
                  const responseBody = JSON.stringify(responsePutMessage);
                  res.writeHead(200, {'Content-Type':'application/json; charset=UTF-8','Access-Control-Allow-Origin': '*','Content-Length': Buffer.byteLength(responseBody),"Vary": "Accept-Encoding"});
                  res.end(responseBody,'utf-8');
                }
              });
            });
          }
     } 
  });
  module.exports = server;
  server.listen(4000);