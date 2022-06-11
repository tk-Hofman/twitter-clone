import { map } from './tweetData'

export async function deleteTweet(id: string) {
  if(map[id]) {
    delete map[id]
  } else {
    throw new Error("idのデータが見つかりません");
  }
} 