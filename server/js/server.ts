//import { addTweet } from "@/infr/addTweet";
import { getTweetAll } from "../src/infr/getTweetAll"

const http = require('http'); 
let newId: string = ""
const server:any =  http.createServer(async (req:any,res: any) => {
  if(req.method === 'GET') {
    const responseTweets = await getTweetAll();
    const responseBody = JSON.stringify(responseTweets)
    res.writeHead(200,{'Content-Type':'application/json; charset=UTF-8','Access-Control-Allow-Origin': '*','Content-Length': Buffer.byteLength(responseBody),"Vary": "Accept-Encoding"});
    res.end(responseBody,'utf-8');
  }
})


module.exports = server;
server.listen(4000);


