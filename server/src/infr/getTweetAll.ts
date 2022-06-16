import { map, TweetDataObj } from './tweetData'

export async function getTweetAll():Promise<Record<string, TweetDataObj>> {
  console.log("GETTTTTTTT")
  return Promise.resolve(map);
}


