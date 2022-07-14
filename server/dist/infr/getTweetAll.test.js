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
const getTweetAll_1 = require("./getTweetAll");
const addTweet_1 = require("./addTweet");
const putTweet_1 = require("./putTweet");
const deleteTweet_1 = require("./deleteTweet");
const numberChange_1 = require("./numberChange");
const date = new Date;
describe('getTweetAll', () => {
    test('ツイートを全件取得', () => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c;
        const getAll = yield (0, getTweetAll_1.getTweetAll)();
        expect(getAll[0].id).toEqual("1");
        expect(getAll[0].message).toEqual("hello");
        expect(getAll[0].userId).toEqual("Twitter");
        const resultStringDate1 = (_a = getAll[0]) === null || _a === void 0 ? void 0 : _a.createdAt;
        expect(true).toEqual((0, numberChange_1.numberChange)(resultStringDate1) <= (0, numberChange_1.numberChange)(date));
        expect(getAll[1].id).toEqual("2");
        expect(getAll[1].message).toEqual("world");
        expect(getAll[1].userId).toEqual("Twitter");
        const resultStringDate2 = (_b = getAll[1]) === null || _b === void 0 ? void 0 : _b.createdAt;
        expect(true).toEqual((0, numberChange_1.numberChange)(resultStringDate2) <= (0, numberChange_1.numberChange)(date));
        expect(getAll[2].id).toEqual("3");
        expect(getAll[2].message).toEqual("japan");
        expect(getAll[2].userId).toEqual("Twitter");
        const resultStringDate3 = (_c = getAll[2]) === null || _c === void 0 ? void 0 : _c.createdAt;
        expect(true).toEqual((0, numberChange_1.numberChange)(resultStringDate3) <= (0, numberChange_1.numberChange)(date));
    }));
    test('addツイート後の全件取得', () => __awaiter(void 0, void 0, void 0, function* () {
        var _d, _e, _f, _g;
        const responseId = yield (0, addTweet_1.addTweet)("tktktk", "よろしくお願いします");
        const getAll = yield (0, getTweetAll_1.getTweetAll)();
        expect(getAll[0].id).toEqual("1");
        expect(getAll[0].message).toEqual("hello");
        expect(getAll[0].userId).toEqual("Twitter");
        const resultStringDate1 = (_d = getAll[0]) === null || _d === void 0 ? void 0 : _d.createdAt;
        expect(true).toEqual((0, numberChange_1.numberChange)(resultStringDate1) <= (0, numberChange_1.numberChange)(date));
        expect(getAll[1].id).toEqual("2");
        expect(getAll[1].message).toEqual("world");
        expect(getAll[1].userId).toEqual("Twitter");
        const resultStringDate2 = (_e = getAll[1]) === null || _e === void 0 ? void 0 : _e.createdAt;
        expect(true).toEqual((0, numberChange_1.numberChange)(resultStringDate2) <= (0, numberChange_1.numberChange)(date));
        expect(getAll[2].id).toEqual("3");
        expect(getAll[2].message).toEqual("japan");
        expect(getAll[2].userId).toEqual("Twitter");
        const resultStringDate3 = (_f = getAll[2]) === null || _f === void 0 ? void 0 : _f.createdAt;
        expect(true).toEqual((0, numberChange_1.numberChange)(resultStringDate3) <= (0, numberChange_1.numberChange)(date));
        expect(getAll[3].id).toEqual(responseId);
        expect(getAll[3].message).toEqual("よろしくお願いします");
        expect(getAll[3].userId).toEqual("tktktk");
        const resultStringDate4 = (_g = getAll[3]) === null || _g === void 0 ? void 0 : _g.createdAt;
        expect(true).toEqual((0, numberChange_1.numberChange)(resultStringDate4) <= (0, numberChange_1.numberChange)(date));
    }));
    test('update後の全件取得', () => __awaiter(void 0, void 0, void 0, function* () {
        var _h, _j, _k;
        yield (0, putTweet_1.putTweet)("3", "こんにちは");
        const getAll = yield (0, getTweetAll_1.getTweetAll)();
        expect(getAll[0].id).toEqual("1");
        expect(getAll[0].message).toEqual("hello");
        expect(getAll[0].userId).toEqual("Twitter");
        const resultStringDate1 = (_h = getAll[0]) === null || _h === void 0 ? void 0 : _h.createdAt;
        expect(true).toEqual((0, numberChange_1.numberChange)(resultStringDate1) <= (0, numberChange_1.numberChange)(date));
        expect(getAll[1].id).toEqual("2");
        expect(getAll[1].message).toEqual("world");
        expect(getAll[1].userId).toEqual("Twitter");
        const resultStringDate2 = (_j = getAll[1]) === null || _j === void 0 ? void 0 : _j.createdAt;
        expect(true).toEqual((0, numberChange_1.numberChange)(resultStringDate2) <= (0, numberChange_1.numberChange)(date));
        expect(getAll[2].id).toEqual("3");
        expect(getAll[2].message).toEqual("こんにちは");
        expect(getAll[2].userId).toEqual("Twitter");
        const resultStringDate3 = (_k = getAll[2]) === null || _k === void 0 ? void 0 : _k.createdAt;
        expect(true).toEqual((0, numberChange_1.numberChange)(resultStringDate3) <= (0, numberChange_1.numberChange)(date));
    }));
    test('delete後の全件取得', () => __awaiter(void 0, void 0, void 0, function* () {
        var _l, _m;
        yield (0, deleteTweet_1.deleteTweet)("1");
        const getAll = yield (0, getTweetAll_1.getTweetAll)();
        expect(getAll[0].id).toEqual("2");
        expect(getAll[0].message).toEqual("world");
        expect(getAll[0].userId).toEqual("Twitter");
        const resultStringDate2 = (_l = getAll[1]) === null || _l === void 0 ? void 0 : _l.createdAt;
        expect(true).toEqual((0, numberChange_1.numberChange)(resultStringDate2) <= (0, numberChange_1.numberChange)(date));
        expect(getAll[1].id).toEqual("3");
        expect(getAll[1].message).toEqual("こんにちは");
        expect(getAll[1].userId).toEqual("Twitter");
        const resultStringDate3 = (_m = getAll[2]) === null || _m === void 0 ? void 0 : _m.createdAt;
        expect(true).toEqual((0, numberChange_1.numberChange)(resultStringDate3) <= (0, numberChange_1.numberChange)(date));
    }));
});
//# sourceMappingURL=getTweetAll.test.js.map