const sqlite3 = require('sqlite3').verbose();
let db;

function setUp(dbPath) {
  return new Promise ((resolve,reject) => {
    const path = dbPath || "./twitter.db";
    const db = new sqlite3.Database(path);
    db.serialize(() => {
      db.run("drop table if exists tweets");
      db.run("create table if not exists tweets(id integer primary key autoincrement,message text,like integer, user_id integer, created_at integer)",() => {
        resolve();
      });
    });
  })
}

exports.setDb = (dbPath) => {
  db = new sqlite3.Database (dbPath);
}

exports.getDb = () => {
  return db;
}

exports.setUp = setUp;
