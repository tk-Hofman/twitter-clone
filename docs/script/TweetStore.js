let tweetMessages = [];
const url = 'http://localhost:4000/message';

export async function loadTweets() {
  const response = await fetch(url,{
    method: 'GET'
  })
  tweetMessages = await response.json(); 
  changeHandler();
}

export async function addMessage(content) {
  // tweetMessagesの末尾に他のオブジェクトと同じ形式で追加する
  const method = 'POST';
  const headers = {
    'Accept' : 'application/json',
    'Content-Type': 'application/json'
  };
  let newTweetContent = ({message: content.message, like: 0, userId: content.userId});
  console.log("http://localhost:4000/message", {method, headers, body})
  const response = await fetch("http://localhost:4000/message", {method, headers, body});
  newTweetContent = await response.json();
  tweetMessages.push(newTweetContent);
  changeHandler();
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
