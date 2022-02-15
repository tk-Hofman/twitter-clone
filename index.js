'use strict';
import { createTweetView } from './script/createTweetView.js'
import { loadTweets, onChange, addLike } from './script/TweetStore.js'

function reDrawTweets() {
  defaultTweet(loadTweets());
}

onChange(reDrawTweets)

const lodedTweets = loadTweets();
console.log(lodedTweets);

function defaultTweet(tweets) {
  document.querySelector('#modal').removeAttribute("data-open");
  document.querySelector('#tweets').innerHTML='';
  for(let i = 0; i < tweets.length; i++ ) {
    createTweetView(tweets[i]);
  }
}

defaultTweet(lodedTweets);

  document.querySelector('#tweet-btn').addEventListener('click',() => {
    document.querySelector('#modal').setAttribute("data-open",true);
  });

  document.querySelector('#modal-back').addEventListener('click',() => {
    document.querySelector('#modal').removeAttribute("data-open");
  });

  var textbox = document.getElementById('tweet-input');
  var newTweetAendBtn = document.querySelector('.new-tweet-send-btn');
  newTweetAendBtn.addEventListener('click',buttonClick);

  function buttonClick() {
    createTweetView(textbox.value)
    document.querySelector('#modal').removeAttribute("data-open");
  }
  
  var likeButton = document.querySelector('.like-icon');
  likeButton.addEventListener('click',addLike);
