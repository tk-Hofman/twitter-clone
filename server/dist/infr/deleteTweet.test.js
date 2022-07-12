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
const deleteTweet_1 = require("./deleteTweet");
const getTweet_1 = require("./getTweet");
describe("deleteTweet", () => {
    test("1件目のツイートを削除", () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, deleteTweet_1.deleteTweet)("1");
        const result = yield (0, getTweet_1.getTweet)("1");
        expect(result).toEqual(null);
    }));
    test("2件目のツイートを削除", () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, deleteTweet_1.deleteTweet)("2");
        const result = yield (0, getTweet_1.getTweet)("2");
        expect(result).toEqual(null);
    }));
    test("IDが見つからないパターン", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(1);
        try {
            yield (0, deleteTweet_1.deleteTweet)("999");
        }
        catch (e) {
            expect(e.message).toMatch("idのデータが見つかりません");
        }
    }));
});
//# sourceMappingURL=deleteTweet.test.js.map