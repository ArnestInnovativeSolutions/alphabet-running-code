"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNextCodeWithDecoration = exports.getNextCode = void 0;
/**
 * Generate the next code, say
 * if the input is AAAA, it returns AAAB, and
 * if the input is AZZZZ, it returns BAAAA also
 * if the input is ZZZZ, it returns AAAAA
 * @param code Current code to generate a new Code
 * @returns The next code
 */
function getNextCode(code = "ABCD") {
    const codeLength = code.length;
    for (let i = codeLength - 1; i >= 0; i--) {
        if (code[i] === "Z") {
            continue;
        }
        let newCode = code.substring(0, i) + String.fromCharCode(code.charCodeAt(i) + 1);
        for (let j = i + 1; j < codeLength; j++) {
            newCode += "A";
        }
        return newCode;
    }
    let newCode = "A";
    for (let i = 0; i < codeLength; i++) {
        newCode += "A";
    }
    return newCode;
}
exports.getNextCode = getNextCode;
/**
 * Generate the next code, say
 * if the input is AAAA, it returns AAAB, and
 * if the input is AZZZZ, it returns BAAAA also
 * if the input is ZZZZ, it returns AAAAA
 * @param code Current code to generate a new Code
 * @param prefix code Prefix, eg: 'INV-'
 * @param suffix  code suffix, eg: '-2023'
 * @returns The next code with prefix and suffix, eg: 'INV-AAAB-2023'
 */
function getNextCodeWithDecoration(code = "ABCD", prefix, suffix) {
    var _a;
    const newCode = getNextCode(code);
    return (_a = prefix !== null && prefix !== void 0 ? prefix : "" + newCode + suffix) !== null && _a !== void 0 ? _a : "";
}
exports.getNextCodeWithDecoration = getNextCodeWithDecoration;
//# sourceMappingURL=index.js.map