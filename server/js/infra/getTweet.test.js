const {setDb,setUp,getDb} = require('./db');
const {getTweet} = require('./getTweet');
const {addTweet} = require('./addTweet');
describe("getTweet",() => {
  beforeEach (async () => {
    await setUp("./getTest.db");
    setDb("./getTest.db");
  })
  test("tweetを取得",async () => {
    const newId = await addTweet({
      message: "こんにちは",
      userId: 12345
    });
    const tweet = await getTweet(newId);
    delete tweet.createdAt;
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
    const tweet = await getTweet(2);
    delete tweet.createdAt
    expect(tweet).toEqual({
      id: 2,
      message: "2個目",
      userId: 54321,
      like: 0
    })
  });
  
  test("3個目のtweetを取得",async () => {
    await addTweet({
      message: "1個目",
      userId: 12345
    });
    await addTweet({
      message: "2個目",
      userId: 54321
    });
    const tweet = await getTweet(3);
    delete tweet.createdAt
    expect(tweet).toBeNull();
  })
})


