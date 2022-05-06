import {getTweet} from "./getTweet"
import {addTweet} from "./addTweet"
import {deleteTweet} from "./deleteTweet"
type TweetData = {
  id: string,
  message: string,
  like: number,
  createdAt: string,
  userId: string
}

const date = new Date

describe("getTweet", () => {
  test("1件目のツイートを取得", async () => {
    const tweetId: string = "1";
    const resultData = await getTweet(tweetId) 
    const anwserData: TweetData = {
      id: tweetId,
      message: "hello",
      like: 0,
      createdAt: date.toLocaleString(), 
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
      createdAt: date.toLocaleString(),
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
      createdAt: date.toLocaleString(),
      userId: "tokitoki"
    }
    anwserData.id = tweetId;
    expect(resultData).toEqual(anwserData)
  });

  test("addTweetで投稿した内容を取得", async () => {
    const tweetId: string = "4";
    expect(await getTweet(tweetId)).toEqual(await addTweet("YoshinoToki", "ときです"))
  })

  test("deleteTweetで削除したTweetをgetTweetしてnullを取得", async () => {
    await deleteTweet("2")
    expect(await getTweet("2")).toEqual(null)
  })

  test("IDが見つからないパターン", async () => {
    const resultData = await getTweet("aaaa") 
    expect(resultData).toEqual(null)
  })
})


