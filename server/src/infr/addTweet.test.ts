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
    const idAndMessage =  await addTweet("7","ここ")
    const message = await getTweet(idAndMessage[0],idAndMessage[1])
    const anwserData: DataType = {
      id: idAndMessage[0],
      message: idAndMessage[1],
      like: 0,
      //createdAt: date.toLocaleString(),
      userId: "tokitoki"
    }
    expect(message).toEqual(anwserData)
  })
})


