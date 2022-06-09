import { putTweet } from "./putTweet"
import { getTweet } from "./getTweet"
import { numberChange } from "./numberChange";

const date = new Date;

describe('putTweet', () => {
  test('ツイート内容を更新', async () => {
    await putTweet("3", "更新")
    const result = await getTweet("3")
    expect(result?.id).toEqual("3")
    expect(result?.message).toEqual("更新")
    expect(result?.userId).toEqual("tokitoki")
    const resultStringDate: any = result?.createdAt;
    expect(true).toEqual(numberChange(resultStringDate) <= numberChange(date))
  })

  test('存在しないidを送信', async () => {
    expect.assertions(1);
    try {
      await putTweet("99","エラー")
    }
    catch (e:any) {
      expect(e.message).toMatch('idのデータが見つかりません');
    }
  })
})