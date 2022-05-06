import { deleteTweet } from "./deleteTweet";


describe("deleteTweet", () => {
  test("1件目のツイートを削除", async () => {
    const removeData = await deleteTweet("1")
    expect(removeData).toEqual(null)
  })

  test("2件目のツイートを削除", async () => {
    const removeData = await deleteTweet("2")
    expect(removeData).toEqual(null)
  })
  test("IDが見つからないパターン", async () => {
    const removeData = await deleteTweet("aaaa") 
    expect(removeData).toEqual(null)
  })
})