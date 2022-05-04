import { deleteTweet } from "./deleteTweet";


describe("deleteTweet", () => {
  test("1件目のツイートを削除", async () => {
    const removeData = await deleteTweet("1")
    expect(removeData).toEqual({
      2: {
        id: "2",
        message: "world",
        like: 0,
        //createdAt: date.toLocaleString(),
        userId: "tokitoki"
      },
      3: {
        id: "3",
        message: "japan",
        like: 0,
        //createdAt: date.toLocaleString(),
        userId: "tokitoki"
      }
    })
  })

  test("2件目のツイートを削除", async () => {
    const removeData = await deleteTweet("2")
    expect(removeData).toEqual({
      3: {
        id: "3",
        message: "japan",
        like: 0,
        //createdAt: date.toLocaleString(),
        userId: "tokitoki"
      }
    })
  })
  test("IDが見つからないパターン", async () => {
    const removeData = await deleteTweet("aaaa") 
    expect(removeData).toEqual(null)
  })
})