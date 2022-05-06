import {tweetData} from "./tweetData";

type TweetDataObj = {
  id: string;
  message: string;
  like: number;
  createdAt: string;
  userId: string;
}

const map: Record<string, TweetDataObj>  = tweetData()
const date = new Date

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


