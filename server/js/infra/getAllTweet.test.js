const {getAllTweet} = require('./getAllTweet');
const {setDb,setUp} = require('./db');
const {addTweet} = require('./addTweet');
describe("getAllTweet",() => {
  beforeEach (async () => {
    await setUp("./getAllTest.db");
    setDb("./getAllTest.db");
    console.log("セットアップ完了のはず");
  })
  test("0件のtweetを取得",async () => {
    const tweets = await getAllTweet();
    expect(tweets).toEqual([]);
  });

  test("3件のtweetを取得",async () => {
    await addTweet({
      message: "こんにちは",
      userId: 12222
    });
    await addTweet({
      message: "おはよう",
      userId: 123333
    });
    await addTweet({
      message: "こんばんわ",
      userId: 12839
    });
    const tweets = await getAllTweet();
    const testResult = tweets.map((tweet) => {
      return {
        id: tweet.id,
        message: tweet.message,
        like: tweet.like,
        userId: tweet.userId
      }
    })
    expect(testResult).toEqual([
      {
        id: 1,
        message: 'こんにちは',
        like: 0, 
        userId: 12222
      },
      {
        id: 2,
        message: 'おはよう',
        like: 0,
        userId: 123333
      },
      {
        id: 3,
        message: 'こんばんわ',
        like: 0,
        userId: 12839
      }
    ]);
  });
})


