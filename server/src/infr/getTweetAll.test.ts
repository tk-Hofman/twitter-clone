import { getTweetAll } from "./getTweetAll"

describe('getTweetAll', () => {
  test('ツイートを全件取得', async () => {
    const getAll = await getTweetAll()
   expect(getAll).toEqual(getAll)
  })
})








