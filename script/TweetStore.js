const tweetMessages = [
  {message: "こんにちは", like: 2, id: "yosino"},
  {message: "こんばんわ", like: 90, id: "toki"},
  {message: "おはよう", like: 55, id: "jyo"},
  {message: "さよなら", like: 30, id: "tbris"},
  {message: "いただきます", like: 49, id: "oosaka"},
  {message: "ご馳走様です", like: 31, id: "javascript"}
];

export function addMessage(message) {
  // tweetMessagesの末尾に他のオブジェクトと同じ形式で追加する
  const newTweetContent = {message: message, like: 0, id: Math.random().toString()};
  tweetMessages.push(newTweetContent);
  changeHandler();
}

export function loadTweets() {
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
