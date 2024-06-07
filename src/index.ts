/**
 * Generate the next code, say
 * if the input is AAAA, it returns AAAB, and
 * if the input is AZZZZ, it returns BAAAA also
 * if the input is ZZZZ, it returns AAAAA
 * @param code Current code to generate a new Code
 * @returns The next code
 */
function getNextCode(code: string = "ABCD"): string {
  const codeLength: number = code.length;
  for (let i = codeLength - 1; i >= 0; i--) {
    if (code[i] === "Z") {
      continue;
    }

    let newCode: string =
      code.substring(0, i) + String.fromCharCode(code.charCodeAt(i) + 1);
    for (let j = i + 1; j < codeLength; j++) {
      newCode += "A";
    }

    return newCode;
  }

  let newCode: string = "A";
  for (let i = 0; i < codeLength; i++) {
    newCode += "A";
  }

  return newCode;
}

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
function getNextCodeWithDecoration(
  code: string = "ABCD",
  prefix: string | undefined,
  suffix: string | undefined
): string {
  const newCode: string = getNextCode(code);
  return prefix ?? "" + newCode + suffix ?? "";
}

export { getNextCode, getNextCodeWithDecoration };