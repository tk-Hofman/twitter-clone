type TweetDataObj = {
  id: string
  message: string
  like: number
  createdAt: Date
  userId: string
}

const map: Record<string, TweetDataObj> = {
  kokoko: {
    id: "kokoko",
    message: "hello",
    like: 0,
    createdAt: new Date(),
    userId: "tokitoki"
  }
}

export async function getTweet(id: string): Promise<TweetDataObj | null> {
  return  Promise.resolve(map[id] || null)
}
