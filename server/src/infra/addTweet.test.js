const {setDb,setUp,getDb} = require('./db');
const {addTweet} = require('./addTweet');
describe("addTweet",() => {
  beforeEach (async () => {
    await setUp("./test.db");
    setDb("./test.db");
  })
  test("tweetを投稿",async () => {
    const newId = await addTweet({
      message: "こんにちは",
      userId: 12345
    });
    getDb().get(`SELECT * FROM tweets where id=${newId}`, (err, rows) =>{
      const responseData = {
        id: rows.id,
        message: rows.message,
        like: rows.like,
        userId: rows.user_id
      };
      expect(newId).toEqual(1);

      expect(responseData).toEqual({
        id: 1,
        message: "こんにちは",
        like: 0,
        userId: 12345
      })
    });
  });
})


