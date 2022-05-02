import { deleteTweet } from "./deleteTweet";

type TweetDataObj = {
  id: string;
  message: string;
  like: number;
  //createdAt: string;
  userId: string;
}

describe("deleteTweet", () => {
  test("ツイートを削除", async () => {
    const id = "1"
    const remove = await deleteTweet("1")
    expect(deleteTweet("1")).toEqual({
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
})