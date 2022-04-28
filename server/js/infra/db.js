const sqlite3 = require('sqlite3').verbose();
let database;

function setUp(dbPath) {
  return new Promise ((resolve,reject) => {
    const path = dbPath || "./twitter.db";
    const db = new sqlite3.Database(path);
    db.serialize(() => {
      db.run("delete from tweets")
      db.run("drop table if exists tweets");
      db.run("create table if not exists tweets(id integer primary key autoincrement,message text,like integer, user_id integer, created_at integer)",() => {
        console.log("セットアップ完了");
        resolve()
      });
    });
    db.close();
  })
}

exports.setDb = (dbPath) => {
  database = new sqlite3.Database (dbPath);
}

exports.getDb = () => {
  return database;
}

exports.setUp = setUp;
