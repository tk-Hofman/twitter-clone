import { createServer } from "http"
import { getTweetAll } from "./infr/getTweetAll"
import { getTweet } from "./infr/getTweet"
import { addTweet } from "./infr/addTweet"
import { deleteTweet } from "./infr/deleteTweet"
import { putTweet } from "./infr/putTweet"

let getAccessUrlSplit: string[] = [];
const server =  createServer(async (req,res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Request-Method', '*')
  res.setHeader('Access-Control-Allow-Methods', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  //res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  if (req.url) {
    getAccessUrlSplit = req.url.split("/");
  }
  if (req.url === '/message') {
    if (req.method === 'POST') {
      let newData: string = "";
      req.on('data', function(chunk) {
        newData += chunk;
      })
      .on('end',async function() {
        const postId = await addTweet(String(JSON.parse(newData).user_id),JSON.parse(newData).message);
        const responseTweet = await getTweet(postId)
        const responseBody = JSON.stringify(responseTweet)
        res.end(responseBody,'utf-8');
      })
    } else {
      if (req.method === 'GET') {
        const getTweets = await getTweetAll();
        const responseBody = JSON.stringify(getTweets)
        res.end(responseBody,'utf-8');
      } 
    }
  } else {
    const tweetId: string = getAccessUrlSplit[2]
    console.log("ここ１",req.method)
    if (req.method === 'GET') {
      const getTweets = await getTweet(tweetId);
      const responseBody = JSON.stringify(getTweets)
      res.end(responseBody,'utf-8');
    } else if (req.method === 'DELETE') {
      console.log("ここ２")
      await deleteTweet(tweetId);
      res.end(tweetId,'utf-8');
    } else if (req.method === 'PUT') {
      let newData: string = "";
      req.on('data', function(chunk) {
        newData += chunk;
      })
      .on('end',async function() {
        const updateTweet = await putTweet(tweetId,JSON.parse(newData).message);
        const responseBody = JSON.stringify(updateTweet)
        res.end(responseBody,'utf-8');
      })
    }
  }
});

  module.exports = server;
  server.listen(4000)

  
  
