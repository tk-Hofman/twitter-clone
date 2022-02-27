let tweetMessages = [];

export async function loadTweets() {
  const url = 'http://localhost:4000';
  const response = await fetch(url,{
    method: 'GET'
  })
  tweetMessages = await response.json(); 
  changeHandler();
}


export function addMessage(message) {
  // tweetMessagesの末尾に他のオブジェクトと同じ形式で追加する
  const newTweetContent = {message: message, like: 0, id: Math.random().toString()};
  tweetMessages.push(newTweetContent);

  const  newTweetConten= new FormData();
  fetch('http://localhost:4000', {
  method: 'PUT',
  body: newTweetConten
  })
  .then(response => response.json())
  .then(result => {
    console.log('Success:', result);
  })
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
