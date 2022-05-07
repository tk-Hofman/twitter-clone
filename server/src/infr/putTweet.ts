import map = require("./tweetData");

type TweetDataObj = {
  id: string;
  message: string;
  like: number;
  createdAt: string;
  userId: string;
}

export async function putTweet(id: string, message: string):Promise<TweetDataObj | void> {
  if(map[id]) {
    map[id]["message"] = message;
    return Promise.resolve(map[id])
  } else {
    return Promise.resolve(console.log("正しいidを入力してください"))
  }
}