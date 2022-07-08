import { getTweetAll } from "./getTweetAll"
import { addTweet } from "./addTweet"
import { putTweet } from "./putTweet"
import { deleteTweet } from "./deleteTweet"
import { numberChange } from "./numberChange"



const date = new Date

describe('getTweetAll', () => {
  test('ツイートを全件取得', async () => {
    const getAll = await getTweetAll()
    expect(getAll[0].id).toEqual("1")
    expect(getAll[0].message).toEqual("hello")
    expect(getAll[0].userId).toEqual("Twitter")
    const resultStringDate1: any = getAll[0]?.createdAt;
    expect(true).toEqual(numberChange(resultStringDate1) <= numberChange(date))
    expect(getAll[1].id).toEqual("2")
    expect(getAll[1].message).toEqual("world")
    expect(getAll[1].userId).toEqual("Twitter")
    const resultStringDate2: any = getAll[1]?.createdAt;
    expect(true).toEqual(numberChange(resultStringDate2) <= numberChange(date))
    expect(getAll[2].id).toEqual("3")
    expect(getAll[2].message).toEqual("japan")
    expect(getAll[2].userId).toEqual("Twitter")
    const resultStringDate3: any = getAll[2]?.createdAt;
    expect(true).toEqual(numberChange(resultStringDate3) <= numberChange(date))
  })

  test('addツイート後の全件取得', async () => {
    const responseId = await addTweet("tktktk","よろしくお願いします")
    const getAll = await getTweetAll()
    expect(getAll[0].id).toEqual("1")
    expect(getAll[0].message).toEqual("hello")
    expect(getAll[0].userId).toEqual("Twitter")
    const resultStringDate1: any = getAll[0]?.createdAt;
    expect(true).toEqual(numberChange(resultStringDate1) <= numberChange(date))
    expect(getAll[1].id).toEqual("2")
    expect(getAll[1].message).toEqual("world")
    expect(getAll[1].userId).toEqual("Twitter")
    const resultStringDate2: any = getAll[1]?.createdAt;
    expect(true).toEqual(numberChange(resultStringDate2) <= numberChange(date))
    expect(getAll[2].id).toEqual("3")
    expect(getAll[2].message).toEqual("japan")
    expect(getAll[2].userId).toEqual("Twitter")
    const resultStringDate3: any = getAll[2]?.createdAt;
    expect(true).toEqual(numberChange(resultStringDate3) <= numberChange(date))
    expect(getAll[3].id).toEqual(responseId)
    expect(getAll[3].message).toEqual("よろしくお願いします")
    expect(getAll[3].userId).toEqual("tktktk")
    const resultStringDate4: any = getAll[3]?.createdAt;
    expect(true).toEqual(numberChange(resultStringDate4) <= numberChange(date))
  })

  test('update後の全件取得', async () => {
    await putTweet("3","こんにちは")
    const getAll = await getTweetAll()
    expect(getAll[0].id).toEqual("1")
    expect(getAll[0].message).toEqual("hello")
    expect(getAll[0].userId).toEqual("Twitter")
    const resultStringDate1: any = getAll[0]?.createdAt;
    expect(true).toEqual(numberChange(resultStringDate1) <= numberChange(date))
    expect(getAll[1].id).toEqual("2")
    expect(getAll[1].message).toEqual("world")
    expect(getAll[1].userId).toEqual("Twitter")
    const resultStringDate2: any = getAll[1]?.createdAt;
    expect(true).toEqual(numberChange(resultStringDate2) <= numberChange(date))
    expect(getAll[2].id).toEqual("3")
    expect(getAll[2].message).toEqual("こんにちは")
    expect(getAll[2].userId).toEqual("Twitter")
    const resultStringDate3: any = getAll[2]?.createdAt;
    expect(true).toEqual(numberChange(resultStringDate3) <= numberChange(date))

  })

  test('delete後の全件取得', async () => {
    await deleteTweet("1")
    const getAll = await getTweetAll()
    expect(getAll[0].id).toEqual("2")
    expect(getAll[0].message).toEqual("world")
    expect(getAll[0].userId).toEqual("Twitter")
    const resultStringDate2: any = getAll[1]?.createdAt;
    expect(true).toEqual(numberChange(resultStringDate2) <= numberChange(date))
    expect(getAll[1].id).toEqual("3")
    expect(getAll[1].message).toEqual("こんにちは")
    expect(getAll[1].userId).toEqual("Twitter")
    const resultStringDate3: any = getAll[2]?.createdAt;
    expect(true).toEqual(numberChange(resultStringDate3) <= numberChange(date))

  })
})








