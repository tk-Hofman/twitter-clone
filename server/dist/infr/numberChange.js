"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberChange = void 0;
function numberChange(date) {
    if (typeof date === "string") {
        const numberDate = date.replace("/", "").replace("/", "").replace(":", "").replace(":", "").replace(" ", "");
        return Number(numberDate);
    }
    else {
        const stringDate = date.toLocaleString();
        const numberDate = stringDate.replace("/", "").replace("/", "").replace(":", "").replace(":", "").replace(" ", "");
        return Number(numberDate);
    }
}
exports.numberChange = numberChange;
//# sourceMappingURL=numberChange.js.map