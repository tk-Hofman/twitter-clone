import { deleteTweet } from "./deleteTweet";
import { getTweet } from "./getTweet"

describe("deleteTweet", () => {
  test("1件目のツイートを削除", async () => {
    await deleteTweet("1")
    const result = await getTweet("1")
    expect(result).toEqual(null)
  })

  test("2件目のツイートを削除", async () => {
    await deleteTweet("2")
    const result = await getTweet("2")
    expect(result).toEqual(null)
  })

  test("IDが見つからないパターン", async () => {
    const removeData = await deleteTweet("aaaa") 
    expect(removeData).toEqual(new Error("idのデータが見つかりません"))
  })
})