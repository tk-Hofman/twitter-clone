import {tweetData} from "./tweetData";

type TweetDataObj = {
  id: string;
  message: string;
  like: number;
  createdAt: string;
  userId: string;
}

const date = new Date

const map: Record<string, TweetDataObj>  = tweetData()

export async function getTweet(catchId: string): Promise<TweetDataObj | null> {
  if(map[catchId]) {
    return Promise.resolve(map[catchId])
  } 
  return Promise.resolve(null)
}


