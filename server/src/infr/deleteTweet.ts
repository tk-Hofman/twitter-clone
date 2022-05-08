import map from './tweetData'

export async function deleteTweet(id: string): Promise<null> {
  if(map[id]) {
    delete map[id]
  }
  
  return Promise.resolve(null)
}