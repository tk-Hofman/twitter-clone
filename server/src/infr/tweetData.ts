type TweetDataObj = {
  id: string;
  message: string;
  like: number;
  createdAt: string;
  userId: string;
}


const date = new Date();

const map: Record<string,TweetDataObj> = {
  1: {
    id: "1",
    message: "hello",
    like: 0,
    createdAt: date.toLocaleString(),
    userId: "Twitter"
  },
  2: {
    id: "2",
    message: "world",
    like: 0,
    createdAt: date.toLocaleString(),
    userId: "Twitter"
  },
  3: {
    id: "3",
    message: "japan",
    like: 0,
    createdAt: date.toLocaleString(),
    userId: "Twitter"
  }
}

export { TweetDataObj, map };

