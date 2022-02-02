'use strict';

  document.querySelector('#tweet-btn').addEventListener('click',() => {
    document.querySelector('#modal').setAttribute("data-open",true);
  });

  document.querySelector('#modal-back').addEventListener('click',() => {
    document.querySelector('#modal').removeAttribute("data-open");
  });

  document.querySelector('.new-tweet-send-btn').addEventListener('click',() => {
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
    var tweetBottomBlck1 = document.createElement('div');
    var tweetBottomBlck2 = document.createElement('div');
    var tweetBottomBlck3 = document.createElement('div');
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
    tweetBottomBlck1.setAttribute("class","tweet-bottom-blck");
    tweetBottomBlck2.setAttribute("class","tweet-bottom-blck");
    tweetBottomBlck3.setAttribute("class","tweet-bottom-blck");
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
    

    var now = new Date();
    var month = now.getMonth()+1;
    var data = now.getDate();

    var textbox = document.getElementById("#tweet-up")
    var value = textbox.value;

    tweetName.textContent = "Twetter"
    tweetAaccountDate.textContent = `@Twetter・${month}月${data}日`
    tweetContent.textContent = value 
    replyNumber.textContent = "0" 
    rtNumber.textContent = "0"
    likeNumber.textContent = "0"
    
    tweetBoxNew.appendChild(tweetProfile);
    tweetBoxNew.appendChild(tweetDetail);
    tweetDetail.appendChild(tweetName);
    tweetDetail.appendChild(checkImg);
    tweetDetail.appendChild(tweetAaccountDate);
    tweetDetail.appendChild(tweetMenu);
    tweetBoxNew.appendChild(tweetContent);
    tweetBoxNew.appendChild(tweetBottom);
    tweetBottom.appendChild(tweetBottomBlck1);
    tweetBottom.appendChild(tweetBottomBlck2);
    tweetBottom.appendChild(tweetBottomBlck3);
    tweetBottomBlck1.appendChild(reply);
    tweetBottomBlck1.appendChild(replyNumber);
    tweetBottomBlck2.appendChild(rt);
    tweetBottomBlck2.appendChild(rtNumber);
    tweetBottomBlck3.appendChild(like);
    tweetBottomBlck3.appendChild(likeNumber);
    tweetBottom.appendChild(share);

    
    tweets.before(tweetBoxNew);
    document.querySelector('#modal').removeAttribute("data-open");
  });
