import { addTweet } from "./addTweet"
import { getTweet } from "./getTweet"

describe("addTweet", () => {
  test("成功するパターン", async () => {
    const id =  await addTweet("今から寝ます")
    const message = await getTweet(id)
    expect(message).toEqual("今から寝ます")
  })
})