import { map, TweetDataObj } from './tweetData'

export async function getTweetAll():Promise<Record<string, TweetDataObj>> {
  return Promise.resolve(map);
}


