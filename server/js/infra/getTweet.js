const {getDb} = require("./db");
function getTweet (id) {
  console.log(id);
  return new Promise ((resolve, reject) => {
    getDb().get(`SELECT * FROM tweets where id=${id}`, (err, rows) =>{
      if (err) {
        reject(err);
        return;
      }  
      else {
          const responseTweets = {
            id: rows.id,
            message: rows.message,
            like: rows.like,
            createdAt: rows.created_at,
            userId: rows.user_id
          }
          resolve(responseTweets);
        } 
    });
  })
}

exports.getTweet = getTweet;