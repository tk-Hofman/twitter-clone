var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export let tweetMessages = [];
const url = "http://localhost:4000/message";
export function loadTweets() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url, {
            method: 'GET',
        });
        tweetMessages = yield response.json();
        changeHandler();
    });
}
export function addMessage(content) {
    return __awaiter(this, void 0, void 0, function* () {
        const newTweetContent = { message: content, userId: 'Twitter' };
        const response = yield fetch(url, {
            method: 'POST',
            body: JSON.stringify(newTweetContent)
        });
        tweetMessages.push(yield response.json());
        changeHandler();
    });
}
export function deleteTweet(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${url}/${id}`, {
            method: "DELETE",
        });
        const deleteTweetId = yield response.json();
        tweetMessages = tweetMessages.filter((data) => data.id !== String(deleteTweetId));
        changeHandler();
    });
}
export function updateTweet(message, id) {
    return __awaiter(this, void 0, void 0, function* () {
        const newTweetContent = { message: message, userId: "Twitter" };
        const response = yield fetch(`${url}/${id}`, {
            method: "PUT",
            body: JSON.stringify(newTweetContent)
        });
        const putTweetData = yield response.json();
        const putTweetId = putTweetData.id;
        tweetMessages = tweetMessages.map(data => {
            if (data.id === putTweetId) {
                data.message = putTweetData.message;
            }
            ;
            return data;
        });
        changeHandler();
    });
}
;
export function getTweets() {
    return tweetMessages;
}
export function addLike(id) {
    const extractedTweetMessage = tweetMessages.find(element => element.id === id);
    extractedTweetMessage.like++;
    changeHandler();
}
;
let changeHandler;
export function onChange(handler) {
    changeHandler = handler;
}
