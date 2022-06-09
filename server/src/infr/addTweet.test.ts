import { addTweet } from "./addTweet"
import { getTweet } from "./getTweet"
import { numberChange } from "./numberChange"

const date = new Date

describe("addTweet", () => {
  test("ツイートを投稿", async () => {
    await addTweet("yoshino","こんにちは");
    const result = await getTweet("4");
    expect(result?.id).toEqual("4")
    expect(result?.message).toEqual("こんにちは")
    expect(result?.userId).toEqual("yoshino")
    const resultStringDate: any = result?.createdAt;
    expect(true).toEqual(numberChange(resultStringDate) <= numberChange(date))
  })
})


