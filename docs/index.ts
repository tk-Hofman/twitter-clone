'use strict';
import { createTweetView, selectedTweetId} from './script/createTweetView'
import { getTweets, onChange, addMessage, loadTweets, deleteTweet, updateTweet} from './script/TweetStore'

type TweetDataObj = {
  id: string;
  message: string;
  like: number;
  createdAt: string;
  userId: string;
}

function reDrawTweets() {
  defaultTweet(getTweets());
}

onChange(reDrawTweets)
loadTweets();

function defaultTweet(tweets:TweetDataObj[]) {
  document.querySelector<HTMLElement>('#modal')!.removeAttribute("data-open");
  document.querySelector<HTMLElement>('#tweets')!.innerHTML='';
  for(let i = 0; i < tweets.length; i++ ) {
    createTweetView(tweets[i]);
  }
}

  document.querySelector<HTMLElement>('#tweet-btn')!.addEventListener('click',() => {
    document.querySelector<HTMLElement>('#modal')!.setAttribute("data-open","true");
  });

  document.querySelector<HTMLElement>('.new-tweet-send-btn')!.addEventListener('click',() => {
    const tweetText = document.querySelector<HTMLInputElement>('#tweet-input')!.value;
    document.querySelector<HTMLElement>('#modal')!.removeAttribute("data-open");
    addMessage(tweetText);
    document.querySelector<HTMLInputElement>('#tweet-input')!.value = ""
  });

  document.querySelector<HTMLElement>('#modal-back')!.addEventListener('click',() => {
    document.querySelector<HTMLElement>('#modal')!.removeAttribute("data-open");
    document.querySelector<HTMLInputElement>('#tweet-input')!.value = ""
  });

  document.querySelector<HTMLElement>('#option-content-red')!.addEventListener('click',() => {
    document.querySelector<HTMLElement>('#delete-box-modal')!.setAttribute("data-open","true");
    document.querySelector<HTMLElement>('#menu-box-modal')!.removeAttribute("data-open");
  });

  document.querySelector<HTMLElement>('#modal-back')!.addEventListener('click',() => {
    document.querySelector<HTMLElement>('#menu-box-modal')!.removeAttribute("data-open");
  });

  document.querySelector<HTMLElement>('.cancel-button')!.addEventListener('click',() => {
    document.querySelector<HTMLElement>('#delete-box-modal')!.removeAttribute("data-open");
  });

  document.querySelector<HTMLElement>('.delete-button')!.addEventListener('click',() => {
    deleteTweet(selectedTweetId);  
    document.querySelector<HTMLElement>('#delete-box-modal')!.removeAttribute("data-open");
  });

  document.querySelector<HTMLElement>('#option-content-post')!.addEventListener('click',() => {
    document.querySelector<HTMLElement>('#put-modal')!.setAttribute("data-open","true");
    document.querySelector<HTMLElement>('#menu-box-modal')!.removeAttribute("data-open");
  });

  document.querySelector<HTMLElement>('.put-tweet-send-btn')!.addEventListener('click',() => {
    const tweetText = document.querySelector<HTMLInputElement>('#put-tweet-input')!.value;
    document.querySelector<HTMLElement>('#put-modal')!.removeAttribute("data-open");
    updateTweet(tweetText,selectedTweetId);
    document.querySelector<HTMLInputElement>('#put-tweet-input')!.value = ""
  });

  document.querySelector<HTMLElement>('#put-modal-back')!.addEventListener('click',() => {
    document.querySelector<HTMLElement>('#put-modal')!.removeAttribute("data-open");
    document.querySelector<HTMLInputElement>('put-tweet-input')!.value = ""
  });

  
  

  

  





