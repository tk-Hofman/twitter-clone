let tweetMessages = [];
const url = "http://localhost:4000/message"

export async function loadTweets() {
  const response = await fetch(url,{
    method: 'GET',
  })
  tweetMessages = await response.json(); 
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
    method: "DELETE"
  }).then(response=>{
      return response.json()
  }).then(data=> 
  console.log(data)
  )
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
