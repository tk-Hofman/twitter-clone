type TweetDataObj = {
  id: string;
  message: string;
  like: number;
  createdAt: string;
  userId: string;
}

export let tweetMessages:TweetDataObj[] = [];
const url:string = "http://localhost:4000/message"

export async function loadTweets() {
  const response = await fetch(url,{
    method: 'GET',
  })
  tweetMessages = await response.json(); 
  changeHandler();
}

export async function addMessage(content:string) {
  const newTweetContent = {message: content, userId: 'Twitter'};
    const response = await fetch(url, {
    method : 'POST',
    body : JSON.stringify(newTweetContent)
  })
  tweetMessages.push(await response.json());
  changeHandler();
}

export async function deleteTweet(id:string) {
  const response = await fetch(`${url}/${id}`,{
    method: "DELETE",
  })
  const deleteTweetId = await response.json();
  tweetMessages = tweetMessages.filter((data) => data.id !== String(deleteTweetId));
  changeHandler();
}

export async function updateTweet(message:string, id:string) {
  const newTweetContent = {message: message, userId: "Twitter"};
  const response = await fetch(`${url}/${id}`,{
    method: "PUT",
    body : JSON.stringify(newTweetContent)
  })
  const putTweetData = await response.json()
  const putTweetId = putTweetData.id;
  tweetMessages = tweetMessages.map(data => {
    if(data.id === putTweetId) {
      data.message = putTweetData.message;
    };
    return data;
  });
  changeHandler();
};

export function getTweets() {
  return tweetMessages;
}

export function addLike(id:string) {
  const extractedTweetMessage = tweetMessages.find(element => element.id === id);
  extractedTweetMessage!.like++;  
  changeHandler();
 }; 

let changeHandler:() => void
export function onChange(handler:() => void) {
  changeHandler = handler;
}
