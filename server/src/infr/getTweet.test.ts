import {getTweet} from "./getTweet"
import {addTweet} from "./addTweet"
import {deleteTweet} from "./deleteTweet"
import {TweetDataObj, map } from "./tweetData"
import {numberChange} from "./numberChange"

const date = new Date;

describe("getTweet", () => {
  test("1件目のツイートを取得", async () => {
    const tweetId: string = "1";
    const resultData = await getTweet(tweetId) 
    const anwserData: TweetDataObj = map[tweetId]
    expect(resultData).toEqual(anwserData)
  });

  test("2件目のツイートを取得", async () => {
    const tweetId: string = "2";
    const resultData: TweetDataObj | null = await getTweet(tweetId) 
    const anwserData: TweetDataObj = map[tweetId]
    expect(resultData).toEqual(anwserData)
  });
  test("3件目のツイートを取得", async () => {
    const tweetId: string = "3";
    const resultData: TweetDataObj | null = await getTweet(tweetId) 
    const anwserData: TweetDataObj = map[tweetId]
    expect(resultData).toEqual(anwserData)
  });

  test("addTweetで投稿した内容を取得", async () => {
    await addTweet("YoshinoToki", "ときです")
    const result: TweetDataObj | null = await getTweet("4")
    expect(result?.id).toEqual("4");
    expect(result?.message).toEqual("ときです");
    expect(result?.userId).toEqual("YoshinoToki");
    const resultStringDate: any = result?.createdAt;
    expect(true).toEqual(numberChange(resultStringDate) <= numberChange(date))
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


