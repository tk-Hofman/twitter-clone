import { map } from './tweetData'

export async function deleteTweet(id: string) {
  if(map[id]) {
    const deleteData = map[id]
    delete map[id]
    return deleteData;
  } else {
    throw new Error("idのデータが見つかりません");
  }
}  