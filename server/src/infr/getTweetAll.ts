import {tweetData} from "./tweetData"

type TweetDataObj = {
  id: string;
  message: string;
  like: number;
  createdAt: string;
  userId: string;
}

const map: Record<string, TweetDataObj>  = tweetData()

export async function getTweetAll():Promise<any> {
  return Promise.resolve(map);
}

