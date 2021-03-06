import { addLike } from "./TweetStore";

type TweetDataObj = {
  id: string;
  message: string;
  like: number;
  createdAt: string;
  userId: string;
  reply?:string;
  rt?:string;
}
export let selectedTweetId:string
export function createTweetView (tweetData:TweetDataObj) {
  const tweetBoxNew = document.createElement('div');
  const tweetDetail = document.createElement('div');
  const tweetBottom = document.createElement('div');
  tweetBoxNew.setAttribute("class","tweet-box");
  tweetDetail.setAttribute("class","tweet-detail");
  tweetBottom.setAttribute("class","tweet-bottom");

  const tweetBoxLeft = document.createElement('div');
  const accountIcon = document.createElement ('div')
  const tweetBoxRight = document.createElement('div');
  const tweetName = document.createElement('h3');
  const checkImg = document.createElement('img');
  const tweetId = document.createElement('div');
  const tweetTime = document.createElement('div')
  const tweetMenu = document.createElement('img');
  const tweetContent = document.createElement('div');
  const tweetBottomBlckReply = document.createElement('div');
  const tweetBottomBlockRt = document.createElement('div');
  const tweetBottomBlockLike = document.createElement('div');

  tweetBottomBlockLike.addEventListener('click',() => {
    addLike(tweetData.id);
  })

  const reply = document.createElement('img');
  const replyNumber = document.createElement('div');
  const rt = document.createElement('img');
  const rtNumber = document.createElement('div');
  const likeIcon = document.createElement('button');
  const likeNumber = document.createElement('div');
  const share = document.createElement('img');


  tweetBoxLeft.setAttribute("class","tweet-box-left");
  accountIcon.setAttribute("class","account-icon")
  tweetBoxRight.setAttribute("class","tweet-box-right");
  tweetName.setAttribute("class","tweet-name");
  checkImg.setAttribute("class","official-mark");
  checkImg.setAttribute("src","img/ck.png");
  tweetId.setAttribute("class","tweet-id");
  tweetTime.setAttribute("class","tweet-time");
  tweetMenu.setAttribute("class","tweet-menu-data");
  tweetMenu.setAttribute("id",tweetData.id)

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
  tweetId.textContent = `@${tweetData.userId}???`;
  tweetTime.textContent = tweetData.createdAt.slice(5);
  replyNumber.textContent = "0"
  rtNumber.textContent = "0"
  likeNumber.textContent = String(tweetData.like);
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
  document.querySelector<HTMLInputElement>('#menu-box-modal')!.setAttribute("data-open","true");
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
  const tweets = document.querySelector('#tweets');
  tweets!.prepend(tweetBoxNew); 

  document.querySelector<HTMLElement>('.tweet-menu-data')?.addEventListener('click',function () {
    selectedTweetId = this.id;
 })   
}



