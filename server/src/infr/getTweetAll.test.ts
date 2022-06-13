import { getTweetAll } from "./getTweetAll"
import { addTweet } from "./addTweet"
import { putTweet } from "./putTweet"
import { deleteTweet } from "./deleteTweet"
import {  map } from "./tweetData"


const date = new Date

describe('getTweetAll', () => {
  test('ツイートを全件取得', async () => {
    const getAll = await getTweetAll()
    expect(getAll).toEqual(map)
  })

  test('addツイート後の全件取得', async () => {
    await addTweet("tktktk","よろしくお願いします")
    const getAll = await getTweetAll()
    expect(getAll).toEqual(map)
  })

  test('update後の全件取得', async () => {
    await putTweet("3","こんにちは")
    const getAll = await getTweetAll()
    expect(getAll).toEqual(map)
  })

  test('delete後の全件取得', async () => {
    await deleteTweet("1")
    const getAll = await getTweetAll()
    expect(getAll).toEqual(map)
  })
})








