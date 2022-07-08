import { addLike } from "./TweetStore.js";


export function createTweetView (tweetData) {
    let tweetBoxNew = document.createElement('div');
    let tweetDetail = document.createElement('div');
    let tweetBottom = document.createElement('div');
    tweetBoxNew.setAttribute("class","tweet-box");
    tweetDetail.setAttribute("class","tweet-detail");
    tweetBottom.setAttribute("class","tweet-bottom");
  
    let tweetBoxLeft = document.createElement('div');
    let accountIcon = document.createElement ('div')
    let tweetBoxRight = document.createElement('div');
    let tweetName = document.createElement('h3');
    let checkImg = document.createElement('img');
    let tweetId = document.createElement('div');
    let tweetTime = document.createElement('div')
    let tweetMenu = document.createElement('img');
    let tweetContent = document.createElement('div');
    let tweetBottomBlckReply = document.createElement('div');
    let tweetBottomBlockRt = document.createElement('div');
    let tweetBottomBlockLike = document.createElement('div');

    tweetBottomBlockLike.addEventListener('click',() => {
      addLike(tweetData.id);
    })

    let reply = document.createElement('img');
    let replyNumber = document.createElement('div');
    let rt = document.createElement('img');
    let rtNumber = document.createElement('div');
    let likeIcon = document.createElement('button');
    let likeNumber = document.createElement('div');
    let share = document.createElement('img');


    tweetBoxLeft.setAttribute("class","tweet-box-left");
    accountIcon.setAttribute("class","account-icon")
    tweetBoxRight.setAttribute("class","tweet-box-right");
    tweetName.setAttribute("class","tweet-name");
    checkImg.setAttribute("class","official-mark");
    checkImg.setAttribute("src","img/ck.png");
    tweetId.setAttribute("class","tweet-id");
    tweetTime.setAttribute("class","tweet-time");
    tweetMenu.setAttribute("class","tweet-menu-data");

    tweetMenu.setAttribute("src","img/ten.png");
    tweetContent.setAttribute("class","tweet-content");
    tweetBottomBlckReply.setAttribute("class","tweet-bottom-blck");
    tweetBottomBlockRt.setAttribute("class","tweet-bottom-blck");
    tweetBottomBlockLike.setAttribute("class","tweet-bottom-blck");
    reply.setAttribute("class","reply");
    reply.setAttribute("src","img/rip.png");
    replyNumber.setAttribute("class","reply-number");
    rt.setAttribute("class","rt");
    rt.setAttribute("src","img/rit.png");
    rtNumber.setAttribute("class","rt-number");
    likeIcon.setAttribute("class","like-icon");
    likeIcon.setAttribute("type","img/like.png");
    likeNumber.setAttribute("class","like-number");
    share.setAttribute("class","share");
    share.setAttribute("src","img/ue.png");

    tweetName.textContent = "Tweetr";
    tweetId.textContent = `@${tweetData.userId}・`;
    tweetTime.textContent = tweetData.createdAt.slice(5);
    replyNumber.textContent = 0;
    rtNumber.textContent = 0 ;
    likeNumber.textContent = tweetData.like;
    tweetContent.textContent = tweetData.message;
    
    tweetBoxNew.appendChild(tweetBoxLeft);
    tweetBoxLeft.appendChild(accountIcon);
    tweetBoxNew.appendChild(tweetBoxRight);
    tweetBoxRight.appendChild(tweetDetail);
    tweetDetail.appendChild(tweetName);
    tweetDetail.appendChild(checkImg);
    tweetDetail.appendChild(tweetId);
    tweetDetail.appendChild(tweetTime);
    tweetDetail.appendChild(tweetMenu);

    tweetMenu.addEventListener('click',() => {
      document.querySelector('#menu-box-modal').setAttribute("data-open",true);
    })
  
    tweetBoxRight.appendChild(tweetContent);
    tweetBoxRight.appendChild(tweetBottom);
    tweetBottom.appendChild(tweetBottomBlckReply);
    tweetBottom.appendChild(tweetBottomBlockRt);
    tweetBottom.appendChild(tweetBottomBlockLike);
    tweetBottomBlckReply.appendChild(reply);
    tweetBottomBlckReply.appendChild(replyNumber);
    tweetBottomBlockRt.appendChild(rt);
    tweetBottomBlockRt.appendChild(rtNumber);
    tweetBottomBlockLike.appendChild(likeIcon);
    tweetBottomBlockLike.appendChild(likeNumber);
    tweetBottom.appendChild(share);
    let tweets = document.querySelector('#tweets');
    tweets.prepend(tweetBoxNew);
}