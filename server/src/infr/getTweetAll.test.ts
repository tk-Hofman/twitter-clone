import { getTweetAll } from "./getTweetAll"
import { addTweet } from "./addTweet"
import { putTweet } from "./putTweet"
import { deleteTweet } from "./deleteTweet"


const date = new Date

describe('getTweetAll', () => {
  test('ツイートを全件取得', async () => {
    const getAll = await getTweetAll()
    expect(getAll).toEqual({
      1: {
        id: "1",
        message: "hello",
        like: 0,
        createdAt: date.toLocaleString(),
        userId: "tokitoki"
      },
      2: {
        id: "2", 
        message: "world",
        like: 0,
        createdAt: date.toLocaleString(),
        userId: "tokitoki"
      },
      3: {
        id: "3",
        message: "japan",
        like: 0,
        createdAt: date.toLocaleString(),
        userId: "tokitoki"
      }
    })
  })

  test('addツイート後の全件取得', async () => {
    await addTweet("tktktk","よろしくお願いします")
    const getAll = await getTweetAll()
    expect(getAll).toEqual({
      1: {
        id: "1",
        message: "hello",
        like: 0,
        createdAt: date.toLocaleString(),
        userId: "tokitoki"
      },
      2: {
        id: "2", 
        message: "world",
        like: 0,
        createdAt: date.toLocaleString(),
        userId: "tokitoki"
      },
      3: {
        id: "3",
        message: "japan",
        like: 0,
        createdAt: date.toLocaleString(),
        userId: "tokitoki"
      },
      4: {
        id: "4",
        message: "よろしくお願いします",
        like: 0,
        createdAt: date.toLocaleString(),
        userId: "tktktk"
      }
    })
  })

  test('update後の全件取得', async () => {
    await putTweet("3","こんにちは")
    const getAll = await getTweetAll()
    expect(getAll).toEqual({
      1: {
        id: "1",
        message: "hello",
        like: 0,
        createdAt: date.toLocaleString(),
        userId: "tokitoki"
      },
      2: {
        id: "2", 
        message: "world",
        like: 0,
        createdAt: date.toLocaleString(),
        userId: "tokitoki"
      },
      3: {
        id: "3",
        message: "こんにちは",
        like: 0,
        createdAt: date.toLocaleString(),
        userId: "tokitoki"
      },
      4: {
        id: "4",
        message: "よろしくお願いします",
        like: 0,
        createdAt: date.toLocaleString(),
        userId: "tktktk"
      }
    })
  })

  test('delete後の全件取得', async () => {
    await deleteTweet("1")
    const getAll = await getTweetAll()
    expect(getAll).toEqual({
      2: {
        id: "2", 
        message: "world",
        like: 0,
        createdAt: date.toLocaleString(),
        userId: "tokitoki"
      },
      3: {
        id: "3",
        message: "こんにちは",
        like: 0,
        createdAt: date.toLocaleString(),
        userId: "tokitoki"
      },
      4: {
        id: "4",
        message: "よろしくお願いします",
        like: 0,
        createdAt: date.toLocaleString(),
        userId: "tktktk"
      }
    })
  })
})








