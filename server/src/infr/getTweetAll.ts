import { map, TweetDataObj } from './tweetData'

export async function getTweetAll():Promise<TweetDataObj[]> {
  return Promise.resolve(Object.values(map))
}

