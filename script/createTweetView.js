export function createTweetView (tweetData) {

    var tweetBoxNew = document.createElement('div');
    var tweetDetail = document.createElement('div');
    var tweetBottom = document.createElement('div');
    tweetBoxNew.setAttribute("class","tweet-box");
    tweetDetail.setAttribute("class","tweet-detail");
    tweetBottom.setAttribute("class","tweet-bottom");
  
    var tweetBoxLeft = document.createElement('div');
    var accountIcon = document.createElement ('div')
    var tweetBoxRight = document.createElement('div');
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
    var likeIcon = document.createElement('img');
    var likeNumber = document.createElement('div');
    var share = document.createElement('img');


    tweetBoxLeft.setAttribute("class","tweet-box-left");
    accountIcon.setAttribute("class","account-icon")
    tweetBoxRight.setAttribute("class","tweet-box-right");
    tweetName.setAttribute("class","tweet-name");
    checkImg.setAttribute("class","official-mark");
    checkImg.setAttribute("src","img/ck.png");
    tweetAaccountDate.setAttribute("class","tweet-account-date");
    tweetMenu.setAttribute("class","tweet-menu-data");
    tweetMenu.setAttribute("src","img/ten.png");
    tweetContent.setAttribute("class","tweet-content");
    tweetBottomBlck1.setAttribute("class","tweet-bottom-blck");
    tweetBottomBlck2.setAttribute("class","tweet-bottom-blck");
    tweetBottomBlck3.setAttribute("class","tweet-bottom-blck");
    reply.setAttribute("class","reply");
    reply.setAttribute("src","img/rip.png");
    replyNumber.setAttribute("class","reply-number");
    rt.setAttribute("class","rt");
    rt.setAttribute("src","img/rit.png");
    rtNumber.setAttribute("class","rt-number");
    likeIcon.setAttribute("class","like-icon");
    likeIcon.setAttribute("src","img/like.png");
    likeNumber.setAttribute("class","like-number");
    share.setAttribute("class","share");
    share.setAttribute("src","img/ue.png");

    var now = new Date();
    var month = now.getMonth()+1;
    var data = now.getDate();

    tweetName.textContent = "Twetter"
    tweetAaccountDate.textContent = `@Twetter・${month}月${data}日`
    replyNumber.textContent = "0" 
    rtNumber.textContent = "0"
    likeNumber.textContent = tweetData.like;
    tweetContent.textContent =tweetData.message; 
    
    tweetBoxNew.appendChild(tweetBoxLeft);
    tweetBoxLeft.appendChild(accountIcon);
    tweetBoxNew.appendChild(tweetBoxRight);
    tweetBoxRight.appendChild(tweetDetail);
    tweetDetail.appendChild(tweetName);
    tweetDetail.appendChild(checkImg);
    tweetDetail.appendChild(tweetAaccountDate);
    tweetDetail.appendChild(tweetMenu);
    tweetBoxRight.appendChild(tweetContent);
    tweetBoxRight.appendChild(tweetBottom);
    tweetBottom.appendChild(tweetBottomBlck1);
    tweetBottom.appendChild(tweetBottomBlck2);
    tweetBottom.appendChild(tweetBottomBlck3);
    tweetBottomBlck1.appendChild(reply);
    tweetBottomBlck1.appendChild(replyNumber);
    tweetBottomBlck2.appendChild(rt);
    tweetBottomBlck2.appendChild(rtNumber);
    tweetBottomBlck3.appendChild(likeIcon);
    tweetBottomBlck3.appendChild(likeNumber);
    tweetBottom.appendChild(share);
    var tweets = document.querySelector('#tweets');
    tweets.prepend(tweetBoxNew);
}