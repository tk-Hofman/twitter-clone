import { addTweet } from "./addTweet"
import { getTweet } from "./getTweet"

describe("addTweet", () => {
  test("ツイートを投稿", async () => {
    const idAndMessage =  await addTweet("kokoko","ここ")
    const message = await getTweet(idAndMessage[0],idAndMessage[1])
    const anwserData = {
      id: "",
      message: "",
      like: 0,
      //createdAt: date.toLocaleString(),
      userId: "tokitoki"
    }
    anwserData.id = idAndMessage[0]
    anwserData.message = idAndMessage[1]
    expect(message).toEqual(anwserData)
  })
})