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
const addTweet_1 = require("./addTweet");
const getTweet_1 = require("./getTweet");
const deleteTweet_1 = require("./deleteTweet");
const numberChange_1 = require("./numberChange");
const sleep_1 = require("../utils/sleep");
const date = new Date;
describe("addTweet", () => {
    test("ツイートを投稿", () => __awaiter(void 0, void 0, void 0, function* () {
        const adedId = yield (0, addTweet_1.addTweet)("yoshino", "こんにちは");
        const result = yield (0, getTweet_1.getTweet)(adedId);
        expect(result === null || result === void 0 ? void 0 : result.id).toEqual(adedId);
        expect(result === null || result === void 0 ? void 0 : result.message).toEqual("こんにちは");
        expect(result === null || result === void 0 ? void 0 : result.userId).toEqual("yoshino");
        const resultStringDate = result === null || result === void 0 ? void 0 : result.createdAt;
        expect(true).toEqual((0, numberChange_1.numberChange)(resultStringDate) <= (0, numberChange_1.numberChange)(date));
    }));
    test("削除してから投稿", () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, deleteTweet_1.deleteTweet)("2");
        yield (0, addTweet_1.addTweet)("yoshino", "こんにちは");
        const adedId = yield (0, addTweet_1.addTweet)("555", "5つ目");
        const result = yield (0, getTweet_1.getTweet)(adedId);
        expect(result === null || result === void 0 ? void 0 : result.id).toEqual(adedId);
        expect(result === null || result === void 0 ? void 0 : result.message).toEqual("5つ目");
        expect(result === null || result === void 0 ? void 0 : result.userId).toEqual("555");
        const resultStringDate = result === null || result === void 0 ? void 0 : result.createdAt;
        expect(true).toEqual((0, numberChange_1.numberChange)(resultStringDate) <= (0, numberChange_1.numberChange)(date));
    }));
    test("0.3秒おきに投稿して時間が異なっている事", () => __awaiter(void 0, void 0, void 0, function* () {
        const postFirstId = yield (0, addTweet_1.addTweet)("一回め", "一度目の投稿");
        const tweetDataFirst = yield (0, getTweet_1.getTweet)(postFirstId);
        yield (0, sleep_1.sleep)(300);
        const postSecondId = yield (0, addTweet_1.addTweet)("二回め", "2度目の投稿");
        const tweetDataSecond = yield (0, getTweet_1.getTweet)(postSecondId);
        expect((tweetDataFirst === null || tweetDataFirst === void 0 ? void 0 : tweetDataFirst.createdAt) !== (tweetDataSecond === null || tweetDataSecond === void 0 ? void 0 : tweetDataSecond.createdAt)).toBeTruthy();
    }));
});
//# sourceMappingURL=addTweet.test.js.map