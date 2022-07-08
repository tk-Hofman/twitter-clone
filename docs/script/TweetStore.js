// type TweetDataObj = {
//   id: string;
//   message: string;
//   like: number;
//   createdAt: string;
//   userId: string;
// }

// export let tweetMessages:TweetDataObj[] = [];
// const url:string = "http://localhost:4000/message"

export let tweetMessages = [];
const url = "http://localhost:4000/message"

export async function loadTweets() {
  const response = await fetch(url,{
    method: 'GET',
  })
  tweetMessages = await response.json(); 
  changeHandler();
}

export async function addMessage(content) {
  const newTweetContent = {message: content, userId: 'Twitter'};
    const response = await fetch(url, {
    method : 'POST',
    body : JSON.stringify(newTweetContent)
  })
  tweetMessages.push(await response.json());
  changeHandler();
}

export async function deleteTweet() {
  const response = await fetch(`${url}/${deleteTweetId}`,{
    method: "DELETE",
  })
  const deleteTweetId = await response.json()
  const newTweetData = tweetMessages.filter((data) => data.id !== String(deleteTweetId));
  tweetMessages = newTweetData;
  changeHandler();
}

export async function updateTweet(message) {
  const newTweetContent = {message: message, userId: "Twitter"};
  const response = await fetch(`${url}/${putTweetId}`,{
    method: "PUT",
    body : JSON.stringify(newTweetContent)
  })
  const putTweetData = await response.json()
  const putTweetId = putTweetData.id;
  tweetMessages[putTweetId] = putTweetData;
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
