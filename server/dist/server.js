"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const getTweetAll_1 = require("./infr/getTweetAll");
const getTweet_1 = require("./infr/getTweet");
const addTweet_1 = require("./infr/addTweet");
const deleteTweet_1 = require("./infr/deleteTweet");
const putTweet_1 = require("./infr/putTweet");
let getAccessUrlSplit = [];
const server = (0, http_1.createServer)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.method === "OPTIONS") {
        res.setHeader('Access-Control-Allow-Methods', 'PUT,DELETE');
        res.end();
        return;
    }
    if (req.url) {
        getAccessUrlSplit = req.url.split("/");
    }
    if (req.url === '/message') {
        if (req.method === 'POST') {
            let newData = "";
            req.on('data', function (chunk) {
                newData += chunk;
            })
                .on('end', function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const postId = yield (0, addTweet_1.addTweet)(String(JSON.parse(newData).userId), JSON.parse(newData).message);
                    const responseTweet = yield (0, getTweet_1.getTweet)(postId);
                    const responseBody = JSON.stringify(responseTweet);
                    res.end(responseBody, 'utf-8');
                });
            });
        }
        else {
            if (req.method === 'GET') {
                const getTweets = yield (0, getTweetAll_1.getTweetAll)();
                const responseBody = JSON.stringify(getTweets);
                res.end(responseBody, 'utf-8');
            }
        }
    }
    else {
        const tweetId = getAccessUrlSplit[2];
        if (req.method === 'GET') {
            const getTweets = yield (0, getTweet_1.getTweet)(tweetId);
            const responseBody = JSON.stringify(getTweets);
            res.end(responseBody, 'utf-8');
        }
        else if (req.method === 'DELETE') {
            yield (0, deleteTweet_1.deleteTweet)(tweetId);
            res.end(tweetId, 'utf-8');
        }
        else if (req.method === 'PUT') {
            let newData = "";
            req.on('data', function (chunk) {
                newData += chunk;
            })
                .on('end', function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const updateTweet = yield (0, putTweet_1.putTweet)(tweetId, JSON.parse(newData).message);
                    const responseBody = JSON.stringify(updateTweet);
                    res.end(responseBody, 'utf-8');
                });
            });
        }
    }
}));
module.exports = server;
server.listen(4000);
//# sourceMappingURL=server.js.map