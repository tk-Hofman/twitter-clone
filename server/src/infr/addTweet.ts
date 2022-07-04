import { map } from './tweetData'

const date = new Date

export async function addTweet (userId: string, message: string): Promise<string>{
  let id = ""
  let idElement = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_";
  for ( let i = 0; i < 10; i++ ) {
    id += idElement.charAt(Math.floor(Math.random() * idElement.length));
  }

  for( let i = 0; i < Object.keys(map).length; i++) {
    if (Object.keys(map)[i] !== id) {
      const resultMap = map[id] = {
        id: id,
        message: message,
        like: 0,
        createdAt: date.toLocaleString(),
        userId: userId
      }
    }
  }
  return Promise.resolve(id)
}


