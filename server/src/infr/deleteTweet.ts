import map = require("./tweetData");

export async function deleteTweet(id: string): Promise<void | null> {
  if(map[id]) {
    delete map[id]
  }
  return Promise.resolve(null)
}