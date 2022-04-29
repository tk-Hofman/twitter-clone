import { addTweet } from "./addTweet"
import { getTweet } from "./getTweet"

describe("addTweet", () => {
  test("成功するパターン", async () => {
    const id =  await addTweet("今から寝ます")
    const message = await getTweet(id)
    expect(message).toEqual({
        id: "kokoko",
        message: "hello",
        like: 0,
        //createdAt: date.toLocaleString(),
        userId: "tokitoki"
    })
  })
})