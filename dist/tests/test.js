"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
const nextCode = (0, src_1.getNextCode)("ABCD");
console.log("Next code", nextCode);
const nextCoded = (0, src_1.getNextCodeWithDecoration)("ABCD", "(", ")");
console.log("Next code", nextCoded);
//# sourceMappingURL=test.js.map