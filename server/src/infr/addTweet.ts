type TweetDataObj = {
  id: string;
  message: string;
  like: number;
  createdAt: string;
  userId: string;
}

const date = new Date

const map: Record<string, TweetDataObj> = {
  1: {
    id: "1",
    message: "hello",
    like: 0,
    createdAt: Date.toLocaleString(),
    userId: "tokitoki"
  },
  2: {
    id: "2",
    message: "world",
    like: 0,
    createdAt: Date.toLocaleString(),
    userId: "tokitoki"
  },
  3: {
    id: "3",
    message: "japan",
    like: 0,
    createdAt: Date.toLocaleString(),
    userId: "tokitoki"
  }
}

export async function addTweet (userId: string, message: string): Promise<TweetDataObj>{
  const  id = String(Object.keys(map).length + 1)
      const resultMap = map[String(Object.keys(map).length + 1)] = {
        id: id,
        message: message,
        like: 0,
        createdAt: date.toLocaleString(),
        userId: userId
      }
      return Promise.resolve(resultMap)
  }


