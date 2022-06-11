import { map, TweetDataObj } from './tweetData'

export async function getTweet(catchId: string): Promise<TweetDataObj | null> {
  if(map[catchId]) {
    return Promise.resolve(map[catchId])
  } 
  return Promise.resolve(null)
}
 

