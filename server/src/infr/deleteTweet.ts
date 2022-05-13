import { map } from './tweetData'

export async function deleteTweet(id: string):Promise<void> {
  if(map[id]) {
    delete map[id]
  }
}