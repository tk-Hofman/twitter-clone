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
exports.deleteTweet = void 0;
const tweetData_1 = require("./tweetData");
function deleteTweet(id) {
    return __awaiter(this, void 0, void 0, function* () {
        if (tweetData_1.map[id]) {
            delete tweetData_1.map[id];
        }
        else {
            throw new Error("idのデータが見つかりません");
        }
    });
}
exports.deleteTweet = deleteTweet;
//# sourceMappingURL=deleteTweet.js.map