import { addTweet } from "./addTweet"

const date = new Date

describe("addTweet", () => {
  test("ツイートを投稿", async () => {
    const idAndMessage =  await addTweet("yoshino","こんにちは")
    expect(idAndMessage).toEqual({
        id: "4",
        message: "こんにちは", 
        like: 0,
        createdAt: date.toLocaleString(),
        userId: "yoshino"
    })
  })
})


