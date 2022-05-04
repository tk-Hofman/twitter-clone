import {getTweet} from "./getTweet"
type TweetData = {
  id: string,
  message: string,
  like: number,
  userId: string
}
describe("getTweet", () => {
  test("1件目のツイートを取得", async () => {
    const tweetId: string = "1";
    const resultData = await getTweet(tweetId) 
    const anwserData: TweetData = {
      id: tweetId,
      message: "hello",
      like: 0,
      //createdAt: date.toLocaleString(),
      userId: "tokitoki"
    }
    anwserData.id = tweetId;
    expect(resultData).toEqual(anwserData)
  });

  test("2件目のツイートを取得", async () => {
    const tweetId: string = "2";
    const resultData = await getTweet(tweetId) 
    const anwserData: TweetData = {
      id: tweetId,
      message: "world",
      like: 0,
      //createdAt: date.toLocaleString(),
      userId: "tokitoki"
    }
    anwserData.id = tweetId;
    expect(resultData).toEqual(anwserData)
  });

  test("3件目のツイートを取得", async () => {
    const tweetId: string = "3";
    const resultData = await getTweet(tweetId) 
    const anwserData: TweetData = {
      id: tweetId,
      message: "japan",
      like: 0,
      //createdAt: date.toLocaleString(),
      userId: "tokitoki"
    }
    anwserData.id = tweetId;
    expect(resultData).toEqual(anwserData)
  });

  test("IDが見つからないパターン", async () => {
    const resultData = await getTweet("aaaa") 
    expect(resultData).toEqual(null)
  })
})


