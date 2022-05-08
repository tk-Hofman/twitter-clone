import map from './tweetData'

type TweetDataObj = {
  id: string;
  message: string;
  like: number;
  createdAt: string;
  userId: string;
}


export async function putTweet(id: string, message: string): Promise<TweetDataObj | null> {
  if(map[id]) {
    map[id]["message"] = message;
    return Promise.resolve(map[id])
  } try {
    for(let i = 0; 0 < Object.keys(map).length; i++) {
      if(Object.keys(map)[i] !== id) {
        throw new Error("正しいidを入力してください");
      }
    }
  } catch (error: any) {
    console.log(error.message);
  } 
  return Promise.resolve(null)
}