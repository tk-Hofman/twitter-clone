const {getDb} = require("./db");
function getAllTweet () {
  return new Promise ((resolve, reject) => {
    getDb().all('SELECT * FROM tweets', (err, rows) =>{
      if (err) {
        reject(err);
        return;
      }  else {
          const responseTweets = [];
          for(let i = 0; i < rows.length; i++) {
            const objectResponseTweets = {
              id: rows[i].id,
              message: rows[i].message,
              like: rows[i].like,
              createdAt: rows[i].created_at,
              userId: rows[i].user_id
            }
            responseTweets.push(objectResponseTweets);
          }
          resolve(responseTweets);
        }
    });
  })
}

exports.getAllTweet = getAllTweet;