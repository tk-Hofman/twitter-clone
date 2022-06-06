// //import { addTweet } from "@/infr/addTweet";
// import { getTweetAll } from "./infr/getTweetAll"

// const http = require('http'); 
// let newId: string = ""
// const server:any =  http.createServer(async (req:any,res: any) => {
//   if(req.method === 'GET') {
//     const responseTweets = await getTweetAll();
//     const responseBody = JSON.stringify(responseTweets)
//     res.end(responseBody,'utf-8');
//   }
// })


// module.exports = server;
// server.listen(4000);

import { createServer, IncomingMessage, ServerResponse } from 'http';
 
const port = 5000;


 
const server = createServer((request: IncomingMessage, response: ServerResponse) => {
  response.end('Hello world!');
});
 
server.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Server listening on port ${port}`);
  }
});




