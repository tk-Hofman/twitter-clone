import { addTweet } from "./addTweet"
import { getTweet } from "./getTweet"
import { deleteTweet } from "./deleteTweet"
import { numberChange } from "./numberChange"
import { sleep } from "../utils/sleep"

const date = new Date

describe("addTweet", () => {
  test("ツイートを投稿", async () => {
    const adedId = await addTweet("yoshino","こんにちは");
    const result = await getTweet(adedId);
    expect(result?.id).toEqual(adedId)
    expect(result?.message).toEqual("こんにちは")
    expect(result?.userId).toEqual("yoshino")
    const resultStringDate: any = result?.createdAt;
    expect(true).toEqual(numberChange(resultStringDate) <= numberChange(date))
  })
  test("削除してから投稿", async () => {
    await deleteTweet("2");
    await addTweet("yoshino","こんにちは");
    const adedId = await addTweet("555","5つ目");
    const result = await getTweet(adedId);
    expect(result?.id).toEqual(adedId)
    expect(result?.message).toEqual("5つ目")
    expect(result?.userId).toEqual("555")
    const resultStringDate: any = result?.createdAt;
    expect(true).toEqual(numberChange(resultStringDate) <= numberChange(date))
  })
  test("0.3秒おきに投稿して時間が異なっている事",async () => {
    const postFirstId = await addTweet("一回め","一度目の投稿");
    const tweetDataFirst = await getTweet(postFirstId);
    await sleep(300);
    const postSecondId = await addTweet("二回め","2度目の投稿");
    const tweetDataSecond = await getTweet(postSecondId);
    expect(tweetDataFirst?.createdAt !== tweetDataSecond?.createdAt).toBeTruthy()
  })
}) 


