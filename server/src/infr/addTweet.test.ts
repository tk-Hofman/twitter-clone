import { addTweet } from "./addTweet"
import { getTweet } from "./getTweet"
type DataType = {
  id: string
  message: string
  like: number
  //createdAt: date.toLocaleString(),
  userId: string
};

describe("addTweet", () => {
  test("ツイートを投稿", async () => {
    const idAndMessage: DataType =  await addTweet("yoshino","こんにちは")
    expect(idAndMessage).toEqual({
        id: "2",
        message: "こんにちは",
        like: 0,
        //createdAt: date.toLocaleString(),
        userId: "yoshino"
    })
  })
})


