let tweetMessages = [];
const url = "http://localhost:4000/message"

export async function loadTweets() {
  const response = await fetch(url,{
    mode: 'no-cors',
    method: 'GET'
  })
  tweetMessages = await response.json(); 
}


export async function addMessage(content) {
  // tweetMessagesの末尾に他のオブジェクトと同じ形式で追加する
  const newTweetContent = ({message: content.message, like: 0, userId: content.userId});
  const method = 'POST';
  const body =  JSON.stringify(newTweetContent);
  const headers = {
    'Accept' : 'application/json',
    'Content-Type': 'application/json'
  };
  const response = await fetch("http://localhost:4000/message", {method, headers, body});
  const responseNewTweetContent = await response.json();
  tweetMessages.push(responseNewTweetContent);
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
