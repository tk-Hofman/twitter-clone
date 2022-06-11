import { map, TweetDataObj } from './tweetData'

export async function putTweet(id: string, message: string): Promise<TweetDataObj> {
  if(map[id]) {
    map[id]["message"] = message;
    return Promise.resolve(map[id])
  } 
  throw new Error("idのデータが見つかりません");
}