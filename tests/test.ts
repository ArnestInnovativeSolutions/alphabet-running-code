import { getNextCode, getNextCodeWithDecoration } from '../src';

const nextCode = getNextCode("ABCD");
console.log("Next code", nextCode);

const nextCoded = getNextCodeWithDecoration("ABCD", "(", ")");
console.log("Next code", nextCoded);