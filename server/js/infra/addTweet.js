const {getDb} = require('./db');
exports.addTweet = (tweet) => {
  
  return new Promise ((resolve,reject) => {
    getDb().run("insert into tweets(message,like,user_id,created_at) values (?,?,?,strftime('%s', 'now'))", [tweet.message,0,tweet.userId],function(err)
    {
    if (err) {
      return reject(err);
    }
    newId = this.lastID;
    resolve(newId);
  });
  })
}
