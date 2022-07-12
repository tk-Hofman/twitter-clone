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
const getTweet_1 = require("./getTweet");
const addTweet_1 = require("./addTweet");
const deleteTweet_1 = require("./deleteTweet");
const numberChange_1 = require("./numberChange");
const date = new Date;
describe("getTweet", () => {
    test("1件目のツイートを取得", () => __awaiter(void 0, void 0, void 0, function* () {
        const tweetId = "1";
        const resultData = yield (0, getTweet_1.getTweet)(tweetId);
        expect(resultData === null || resultData === void 0 ? void 0 : resultData.id).toEqual("1");
        expect(resultData === null || resultData === void 0 ? void 0 : resultData.message).toEqual("hello");
        expect(resultData === null || resultData === void 0 ? void 0 : resultData.userId).toEqual("Twitter");
        const resultStringDate = resultData === null || resultData === void 0 ? void 0 : resultData.createdAt;
        expect(true).toEqual((0, numberChange_1.numberChange)(resultStringDate) <= (0, numberChange_1.numberChange)(date));
    }));
    test("2件目のツイートを取得", () => __awaiter(void 0, void 0, void 0, function* () {
        const tweetId = "2";
        const resultData = yield (0, getTweet_1.getTweet)(tweetId);
        expect(resultData === null || resultData === void 0 ? void 0 : resultData.id).toEqual("2");
        expect(resultData === null || resultData === void 0 ? void 0 : resultData.message).toEqual("world");
        expect(resultData === null || resultData === void 0 ? void 0 : resultData.userId).toEqual("Twitter");
        const resultStringDate = resultData === null || resultData === void 0 ? void 0 : resultData.createdAt;
        expect(true).toEqual((0, numberChange_1.numberChange)(resultStringDate) <= (0, numberChange_1.numberChange)(date));
    }));
    test("3件目のツイートを取得", () => __awaiter(void 0, void 0, void 0, function* () {
        const tweetId = "3";
        const resultData = yield (0, getTweet_1.getTweet)(tweetId);
        expect(resultData === null || resultData === void 0 ? void 0 : resultData.id).toEqual("3");
        expect(resultData === null || resultData === void 0 ? void 0 : resultData.message).toEqual("japan");
        expect(resultData === null || resultData === void 0 ? void 0 : resultData.userId).toEqual("Twitter");
        const resultStringDate = resultData === null || resultData === void 0 ? void 0 : resultData.createdAt;
        expect(true).toEqual((0, numberChange_1.numberChange)(resultStringDate) <= (0, numberChange_1.numberChange)(date));
    }));
    test("addTweetで投稿した内容を取得", () => __awaiter(void 0, void 0, void 0, function* () {
        const adedId = yield (0, addTweet_1.addTweet)("YoshinoToki", "ときです");
        const result = yield (0, getTweet_1.getTweet)(adedId);
        expect(result === null || result === void 0 ? void 0 : result.id).toEqual(adedId);
        expect(result === null || result === void 0 ? void 0 : result.message).toEqual("ときです");
        expect(result === null || result === void 0 ? void 0 : result.userId).toEqual("YoshinoToki");
        const resultStringDate = result === null || result === void 0 ? void 0 : result.createdAt;
        expect(true).toEqual((0, numberChange_1.numberChange)(resultStringDate) <= (0, numberChange_1.numberChange)(date));
    }));
    test("deleteTweetで削除したTweetをgetTweetしてnullを取得", () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, deleteTweet_1.deleteTweet)("2");
        expect(yield (0, getTweet_1.getTweet)("2")).toEqual(null);
    }));
    test("IDが見つからないパターン", () => __awaiter(void 0, void 0, void 0, function* () {
        const resultData = yield (0, getTweet_1.getTweet)("aaaa");
        expect(resultData).toEqual(null);
    }));
});
//# sourceMappingURL=getTweet.test.js.map