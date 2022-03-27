const {setDb,setUp,getDb} = require('./db');
const {getTweet} = require('./getTweet');
describe("getTweet",() => {
  beforeEach (async () => {
    await setUp("./test.db");
    setDb("./test.db");
  })
  test("tweetを取得",async () => {
    const newId = await addTweet({
      message: "こんにちは",
      userId: 12345
    });
    const tweet = getTweet(newId);
    delete tweet.createdAt
    expect(tweet).toEqual({
      id: 1,
      message: "こんにちは",
      userId: 12345,
      like: 0
    })
  });
  
  test("2個目のtweetを取得",async () => {
    await addTweet({
      message: "1個目",
      userId: 12345
    });
    await addTweet({
      message: "2個目",
      userId: 54321
    });
    const tweet = getTweet(2);
    delete tweet.createdAt
    expect(tweet).toEqual({
      id: 2,
      message: "2個目",
      userId: 54321,
      like: 0
    })
  });
})


