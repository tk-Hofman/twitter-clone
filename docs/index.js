'use strict';
import { createTweetView } from './script/createTweetView.js'
import { getTweets, onChange, addMessage, loadTweets, } from './script/TweetStore.js'


function reDrawTweets() {
  defaultTweet(getTweets());
}

onChange(reDrawTweets)
loadTweets();

function defaultTweet(tweets) {
  document.querySelector('#modal').removeAttribute("data-open");
  document.querySelector('#tweets').innerHTML='';
  for(let i = 0; i < tweets.length; i++ ) {
    createTweetView(tweets[i]);
  }
}

  document.querySelector('#tweet-btn').addEventListener('click',() => {
    document.querySelector('#modal').setAttribute("data-open",true);
  });

  document.querySelector('.new-tweet-send-btn').addEventListener('click',() => {
    const tweetText =  document.getElementById('tweet-input').value;
    document.querySelector('#modal').removeAttribute("data-open");
    addMessage(tweetText);
  });

  document.querySelector('#modal-back').addEventListener('click',() => {
    document.querySelector('#modal').removeAttribute("data-open");
  });


