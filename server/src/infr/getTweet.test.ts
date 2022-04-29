import {getTweet} from "./getTweet"

describe("getTweet", () => {
  test("成功するパターン", async () => {
    const resultData = await getTweet("kokoko") 
    expect(resultData).toEqual({
      id: "kokoko",
      message: "hello",
      like: 0,
      //createdAt: date.toLocaleString(),
      userId: "tokitoki"
    })
  })
  test("IDが見つからないパターン", async () => {
    const resultWowo = await getTweet("aaaa") 
    expect(resultWowo).toEqual(null)
  })
})
