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
exports.addTweet = void 0;
const tweetData_1 = require("./tweetData");
function addTweet(userId, message) {
    return __awaiter(this, void 0, void 0, function* () {
        let id = "";
        let idElement = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_";
        for (let i = 0; i < 10; i++) {
            id += idElement.charAt(Math.floor(Math.random() * idElement.length));
        }
        for (let i = 0; i < Object.keys(tweetData_1.map).length; i++) {
            const date = new Date();
            if (Object.keys(tweetData_1.map)[i] !== id) {
                const resultMap = tweetData_1.map[id] = {
                    id: id,
                    message: message,
                    like: 0,
                    createdAt: date.toLocaleString(),
                    userId: userId
                };
            }
        }
        return Promise.resolve(id);
    });
}
exports.addTweet = addTweet;
//# sourceMappingURL=addTweet.js.map