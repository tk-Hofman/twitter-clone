type TweetDataObj = {
  id: string;
  message: string;
  like: number;
  //createdAt: string;
  userId: string;
}

const date = new Date

const map: Record<string, TweetDataObj> = {
  kokoko: {
    id: "kokoko",
    message: "hello",
    like: 0,
    //createdAt: date.toLocaleString(),
    userId: "tokitoki"
  }
}

export async function getTweet(id: string): Promise<TweetDataObj | null> {
  return  Promise.resolve(map[id] || null)
}
