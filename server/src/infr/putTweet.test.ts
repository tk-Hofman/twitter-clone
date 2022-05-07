import {putTweet} from "./putTweet"

const date = new Date;

describe('putTweet', () => {
  test('ツイート内容を更新', async () => {
    const put = await putTweet("3", "更新")
    expect(put).toEqual({
      id: "3",
      message: "更新",
      like: 0,
      createdAt: date.toLocaleString(),
      userId: "tokitoki"
    })
  })

  test('存在しないidを送信', async () => {
    const put = await putTweet("8", "更新")
    expect(put).toEqual(console.log("正しいidを入力してください"))
  })
})