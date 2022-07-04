'use strict';
import { createTweetView } from './script/createTweetView.js'
import { getTweets, onChange, addMessage, loadTweets, deleteTweet, updateTweet, tweetMessages} from './script/TweetStore.js'


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

  let id;
  document.body.addEventListener('click', function (event) {
    if(event.target.className === "tweet-menu-data")
    id = event.target.id
  }, false)

  document.querySelector('#tweet-btn').addEventListener('click',() => {
    document.querySelector('#modal').setAttribute("data-open",true);
  });

  document.querySelector('.new-tweet-send-btn').addEventListener('click',() => {
    const tweetText = document.getElementById('tweet-input').value;
    document.querySelector('#modal').removeAttribute("data-open");
    addMessage(tweetText);
    document.getElementById('tweet-input').value = ""
  });

  document.querySelector('#modal-back').addEventListener('click',() => {
    document.querySelector('#modal').removeAttribute("data-open");
    document.getElementById('tweet-input').value = ""
  });

  document.querySelector('#option-content-red').addEventListener('click',() => {
    document.querySelector('#delete-box-modal').setAttribute("data-open",true);
    document.querySelector('#menu-box-modal').removeAttribute("data-open");
  });

  document.querySelector('#modal-back').addEventListener('click',() => {
    document.querySelector('#menu-box-modal').removeAttribute("data-open");
  });

  document.querySelector('.cancel-button').addEventListener('click',() => {
    document.querySelector('#delete-box-modal').removeAttribute("data-open");
  });

  document.querySelector('.delete-button').addEventListener('click',() => {
    deleteTweet(id);   
    document.querySelector('#delete-box-modal').removeAttribute("data-open");
  });

  document.querySelector('#option-content-post').addEventListener('click',() => {
    document.querySelector('#put-modal').setAttribute("data-open",true);
    document.querySelector('#menu-box-modal').removeAttribute("data-open");
  });

  document.querySelector('.put-tweet-send-btn').addEventListener('click',() => {
    const tweetText = document.getElementById('put-tweet-input').value;
    document.querySelector('#put-modal').removeAttribute("data-open");
    updateTweet(tweetText,id);
    document.getElementById('put-tweet-input').value = ""
  });


  document.querySelector('#put-modal-back').addEventListener('click',() => {
    document.querySelector('#put-modal').removeAttribute("data-open");
    document.getElementById('put-tweet-input').value = ""
  });

  

  





