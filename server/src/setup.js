const sqlite3 = require('sqlite3').verbose();

function setUp() {
  const db = new sqlite3.Database("./twitter.db");
  db.serialize(() => {
    db.run("drop table if exists tweets");
    db.run("create table if not exists tweets(id integer primary key autoincrement,message text,like integer, user_id integer, created_at integer)");
  });
}

setUp();



