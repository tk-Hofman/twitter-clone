'use strict';

  document.querySelector('#tweet-btn').addEventListener('click',() => {
    var tweets = document.querySelector('#tweets :first-child');
    var tweetBoxNew = document.createElement('div');
    var tweetDetail = document.createElement('div');
    var tweetBottom = document.createElement('div');
    tweetBoxNew.setAttribute("class","tweet-box");
    tweetDetail.setAttribute("class","tweet-detail");
    tweetBottom.setAttribute("class","tweet-bottom");

    var tweetProfile = document.createElement('img');
    var tweetName = document.createElement('h3');
    var checkImg = document.createElement('img');
    var tweetAaccountDate = document.createElement('div');
    var tweetMenu = document.createElement('img');
    var tweetContent = document.createElement('div');
    var reply = document.createElement('img');
    var replyNumber = document.createElement('div');
    var rt = document.createElement('img');
    var rtNumber = document.createElement('div');
    var like = document.createElement('img');
    var likeNumber = document.createElement('div');
    var share = document.createElement('img');

    tweetName.setAttribute("class","tweet-name");
    tweetProfile.setAttribute("class","tweet-profile-img");
    tweetProfile.setAttribute("src","twpr.png");
    checkImg.setAttribute("class","official-mark");
    checkImg.setAttribute("src","ck.png");
    tweetAaccountDate.setAttribute("class","tweet-account-date");
    tweetMenu.setAttribute("class","tweet-menu-data");
    tweetMenu.setAttribute("src","ten.png");
    tweetContent.setAttribute("class","tweet-content");
    reply.setAttribute("class","reply");
    reply.setAttribute("src","rip.png");
    replyNumber.setAttribute("class","reply-number");
    rt.setAttribute("class","rt");
    rt.setAttribute("src","rit.png");
    rtNumber.setAttribute("class","rt-number");
    like.setAttribute("class","like");
    like.setAttribute("src","like.png");
    likeNumber.setAttribute("class","like-number");
    share.setAttribute("class","share");
    share.setAttribute("src","ue.png");
    

    tweetName.textContent = "Twetter"
    tweetAaccountDate.textContent = "@Twetter・1月1日"
    tweetContent.textContent = "新しいツイートです" 
    replyNumber.textContent = "9000" 
    rtNumber.textContent = "8万"
    likeNumber.textContent = "3万"
    
    tweetBoxNew.appendChild(tweetProfile);
    tweetBoxNew.appendChild(tweetDetail);
    tweetDetail.appendChild(tweetName);
    tweetDetail.appendChild(checkImg);
    tweetDetail.appendChild(tweetAaccountDate);
    tweetDetail.appendChild(tweetMenu);
    tweetBoxNew.appendChild(tweetContent);
    tweetBoxNew.appendChild(tweetBottom);
    tweetBottom.appendChild(reply);
    tweetBottom.appendChild(replyNumber);
    tweetBottom.appendChild(rt);
    tweetBottom.appendChild(rtNumber);
    tweetBottom.appendChild(like);
    tweetBottom.appendChild(likeNumber);
    tweetBottom.appendChild(share);
    
    tweets.before(tweetBoxNew);
    
  });
