'use strict';
import { createTweetView } from './script/createTweetView.js'
import { loadTweets } from './script/loadTweets.js'

  const lodedTweets = loadTweets();
  console.log(lodedTweets);
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



