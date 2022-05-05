type TweetDataObj = {
  id: string;
  message: string;
  like: number;
  //createdAt: string;
  userId: string;
}

const date = new Date

const map: Record<string, TweetDataObj> = {
  1: {
    id: "1",
    message: "hello",
    like: 0,
    //createdAt: date.toLocaleString(),
    userId: "tokitoki"
  }
}

export async function addTweet (userId: string, message: string): Promise<TweetDataObj>{
      const resultMap = map[String(Object.keys(map).length + 1)] = {
        id: String(Object.keys(map).length + 1),
        message: message,
        like: 0,
        //createdAt: date.toLocaleString(),
        userId: userId
      }
      return Promise.resolve(resultMap)
    //)
  }


