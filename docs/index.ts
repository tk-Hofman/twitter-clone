'use strict';
import { createTweetView } from './script/createTweetView.js'
import { getTweets, onChange, addMessage, loadTweets, deleteTweet, updateTweet } from './script/TweetStore.js'


function reDrawTweets() {
  defaultTweet(getTweets());
}

onChange(reDrawTweets)
loadTweets();

function defaultTweet(tweets) {
  document.querySelector<HTMLElement>('#modal')!.removeAttribute("data-open");
  document.querySelector<HTMLElement>('#tweets')!.innerHTML='';
  for(let i = 0; i < tweets.length; i++ ) {
    createTweetView(tweets[i]);
  }
}

  document.querySelector<HTMLElement>('#tweet-btn')!.addEventListener('click',() => {
    document.querySelector<HTMLElement>('#modal')!.setAttribute("data-open",true);
  });

  document.querySelector<HTMLElement>('.new-tweet-send-btn')!.addEventListener('click',() => {
    const tweetText = document.getElementById('tweet-input')!.value;
    document.querySelector<HTMLElement>('#modal')!.removeAttribute("data-open");
    addMessage(tweetText);
    document.getElementById('tweet-input')!.value = ""
  });

  document.querySelector<HTMLElement>('#modal-back')!.addEventListener('click',() => {
    document.querySelector<HTMLElement>('#modal')!.removeAttribute("data-open");
    document.getElementById('tweet-input')!.value = ""
  });

  document.querySelector<HTMLElement>('#option-content-red')!.addEventListener('click',() => {
    document.querySelector<HTMLElement>('#delete-box-modal')!.setAttribute("data-open",true);
    document.querySelector<HTMLElement>('#menu-box-modal')!.removeAttribute("data-open");
  });

  document.querySelector<HTMLElement>('#modal-back')!.addEventListener('click',() => {
    document.querySelector<HTMLElement>('#menu-box-modal')!.removeAttribute("data-open");
  });

  document.querySelector<HTMLElement>('.cancel-button')!.addEventListener('click',() => {
    document.querySelector<HTMLElement>('#delete-box-modal')!.removeAttribute("data-open");
  });

  document.querySelector<HTMLElement>('.delete-button')!.addEventListener('click',() => {
    deleteTweet();   
    document.querySelector<HTMLElement>('#delete-box-modal')!.removeAttribute("data-open");
  });

  document.querySelector<HTMLElement>('#option-content-post')!.addEventListener('click',() => {
    document.querySelector<HTMLElement>('#put-modal')!.setAttribute("data-open",true);
    document.querySelector<HTMLElement>('#menu-box-modal')!.removeAttribute("data-open");
  });

  document.querySelector<HTMLElement>('.put-tweet-send-btn')!.addEventListener('click',() => {
    const tweetText = document.getElementById('put-tweet-input')!.value;
    document.querySelector<HTMLElement>('#put-modal')!.removeAttribute("data-open");
    updateTweet(tweetText);
    document.getElementById('put-tweet-input')!.value = ""
  });


  document.querySelector<HTMLElement>('#put-modal-back')!.addEventListener('click',() => {
    document.querySelector<HTMLElement>('#put-modal')!.removeAttribute("data-open");
    document.getElementById('put-tweet-input')!.value = ""
  });

  

  





