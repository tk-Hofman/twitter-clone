import { addTweet } from "./addTweet"
type DataType = {
  id: string
  message: string
  like: number
  createdAt: string,
  userId: string
};

const date = new Date

describe("addTweet", () => {
  test("ツイートを投稿", async () => {
    const idAndMessage: DataType =  await addTweet("yoshino","こんにちは")
    expect(idAndMessage).toEqual({
        id: "4",
        message: "こんにちは", 
        like: 0,
        createdAt: date.toLocaleString(),
        userId: "yoshino"
    })
  })
})


