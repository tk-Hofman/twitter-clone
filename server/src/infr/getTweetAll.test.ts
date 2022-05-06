import { getTweetAll } from "./getTweetAll"


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
})








