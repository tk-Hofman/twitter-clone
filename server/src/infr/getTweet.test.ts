import {getTweet} from "./getTweet"

describe("getTweet", () => {
  test("成功するパターン", async () => {
    const resultWowo = await getTweet("wowo") 
    expect(resultWowo).toEqual("おやすみ")
    const resultKoko = await getTweet("koko") 
    expect(resultKoko).toEqual("hello")
    const resultNana = await getTweet("nana") 
    expect(resultNana).toEqual("おはよう")
    const resultJeje = await getTweet("jeje") 
    expect(resultJeje).toEqual("こんばんわ")
  })
  test("IDが見つからないパターン", async () => {
    const resultWowo = await getTweet("aaaa") 
    expect(resultWowo).toEqual(null)
  })
})
