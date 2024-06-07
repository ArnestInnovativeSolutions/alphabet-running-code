
  Generates Next Alphabet Code

  [![NPM Version][npm-version-image]][npm-url]
  [![NPM Install Size][npm-install-size-image]][npm-install-size-url]
  [![NPM Downloads][npm-downloads-image]][npm-downloads-url]

```js
const codeGen = require('alphabet-running-code');

const nextCode = codeGen.getNextCode("ABCD");
console.log("Next code", nextCode);
```
```ts
import { getNextCode, getNextCodeWithDecoration } from 'alphabet-running-code';

const nextCode = getNextCode("ABCD");
console.log("Next code", nextCode);

const nextCoded = getNextCodeWithDecoration("ABCD", "(", ")");
console.log("Next code", nextCoded);
```

## Installation

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```console
$ npm install alphabet-running-code
```
## Features

  * Generate Next Alphabetic Sequence, say: AAA => AAB
  * Generate Next Alphabetic Sequence with prefix and suffixß
