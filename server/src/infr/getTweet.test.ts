import {getTweet} from "./getTweet"
import {addTweet} from "./addTweet"


describe("getTweet", () => {
  test("tweeetを取得", async () => {
    const sendMessage =[];
    sendMessage.push("kokoko","こんにちは")
    const resultData = await getTweet(sendMessage[0],sendMessage[1]) 
    const anwserData = {
      id: "kokoko",
      message: "こんにちは",
      like: 0,
      //createdAt: date.toLocaleString(),
      userId: "tokitoki"
    }
  anwserData.id =sendMessage[0]
  anwserData.message = sendMessage[1]
    expect(resultData).toEqual(anwserData)
  })
  test("IDが見つからないパターン", async () => {
    const resultWowo = await getTweet("aaaa") 
    expect(resultWowo).toEqual(null)
  })
})


