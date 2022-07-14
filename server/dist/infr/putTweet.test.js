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
const putTweet_1 = require("./putTweet");
const getTweet_1 = require("./getTweet");
const numberChange_1 = require("./numberChange");
const date = new Date;
describe('putTweet', () => {
    test('ツイート内容を更新', () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, putTweet_1.putTweet)("3", "更新");
        const result = yield (0, getTweet_1.getTweet)("3");
        expect(result === null || result === void 0 ? void 0 : result.id).toEqual("3");
        expect(result === null || result === void 0 ? void 0 : result.message).toEqual("更新");
        expect(result === null || result === void 0 ? void 0 : result.userId).toEqual("Twitter");
        const resultStringDate = result === null || result === void 0 ? void 0 : result.createdAt;
        expect(true).toEqual((0, numberChange_1.numberChange)(resultStringDate) <= (0, numberChange_1.numberChange)(date));
    }));
    test('存在しないidを送信', () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(1);
        try {
            yield (0, putTweet_1.putTweet)("99", "エラー");
        }
        catch (e) {
            expect(e.message).toMatch('idのデータが見つかりません');
        }
    }));
});
//# sourceMappingURL=putTweet.test.js.map