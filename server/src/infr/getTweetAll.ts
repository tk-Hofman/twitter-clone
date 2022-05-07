import map = require("./tweetData");

type TweetDataObj = {
  id: string;
  message: string;
  like: number;
  createdAt: string;
  userId: string;
}


export async function getTweetAll():Promise<Record<string, TweetDataObj>> {
  return Promise.resolve(map);
}

