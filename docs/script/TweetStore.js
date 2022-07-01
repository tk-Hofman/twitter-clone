let tweetMessages = [];
const url = "http://localhost:4000/message"

export async function loadTweets() {
  const response = await fetch(url,{
    method: 'GET',
  })
  tweetMessages = await response.json(); 
  console.log(tweetMessages)
  changeHandler();
}

export async function addMessage(content) {
  const newTweetContent = {message: content, userId: "tokitoki"};
    const response = await fetch(url, {
    method : 'POST',
    body : JSON.stringify(newTweetContent)
  })
  tweetMessages.push(await response.json());
  changeHandler();
}

export async function deleteTweet() {
  await fetch("http://localhost:4000/message/1",{
    method: "DELETE",
    headers: {
      'Content-type': 'application/json'
    },
    body: null,
    crossDomain: true
  })
  tweetMessages.splice(0,1)
  .then(response=>{
      return response.json()
  }).then(data=> 
  console.log(data)
  )
  
  // try {
  //   const response = await fetch("http://localhost:4000/message/1", {
  //     method: "delete"
  //   });
  //   if (!response.ok) {
  //     const message = 'Error with Status Code: ' + response.status;
  //     throw new Error(message);
  //   }
  //   const data = await response.json();
  //   console.log(data);
  // } catch (error) {
  //   console.log('Error: ' + err);
  // }
}

export function getTweets() {
  return tweetMessages;
}

export function addLike(id) {
  const extractedTweetMessage = tweetMessages.find(element => element.id === id);
  extractedTweetMessage.like++;
  changeHandler();
 }; 

let changeHandler
export function onChange(handler) {
  changeHandler = handler;
}
