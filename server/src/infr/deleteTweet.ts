import {tweetData} from "./tweetData"

type TweetDataObj = {
  id: string;
  message: string;
  like: number;
  createdAt: string;
  userId: string;
}

const map: Record<string, TweetDataObj>  = tweetData()

export async function deleteTweet(id: string): Promise<void | null> {
  if(map[id]) {
    delete map[id]
  }
  return Promise.resolve(null)
}