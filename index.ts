export const ID_CODE_ALPHABET = "ASDEIUNWRQXBOKH";
export const ID_CODE_LENGTH = 8;

export const encode = (
  idNumber: number,
  alphabet: string = ID_CODE_ALPHABET,
  length: number = ID_CODE_LENGTH
): string => {
  const codeBase = alphabet.length;
  const indices: number[] = [];

  // Generate indices using base conversion
  let num = idNumber;
  while (num > 0) {
    indices.push(num % codeBase);
    num = Math.floor(num / codeBase);
  }

  // Pad with zeros if necessary
  while (indices.length < length) {
    indices.push(0);
  }

  // Convert indices to corresponding letters in the alphabet
  const letters = indices
    .slice(0, length)
    .map((i) => alphabet[i])
    .join("");

  // Insert hyphen in the middle
  const half = Math.floor(length / 2);
  return letters.slice(0, half) + "-" + letters.slice(half);
};

export const decode = (
  idString: string,
  alphabet: string = ID_CODE_ALPHABET,
  length: number = ID_CODE_LENGTH
): number => {
  if (!verify(idString, alphabet, length)) {
    throw Error(`invalid idString: ${idString}`);
  }

  const codeBase = alphabet.length;

  // Remove hyphen, ensure uppercase, and pad to length if necessary
  let cleanString = idString.replace("-", "").toUpperCase();
  cleanString = cleanString.padEnd(length, alphabet[0]);

  // Convert the string back to a number
  let number = 0;
  for (let i = 0; i < cleanString.length; i++) {
    number += alphabet.indexOf(cleanString[i]!) * Math.pow(codeBase, i);
  }

  return number;
};

/**
 * check whether string is valid code
 * @param code
 * @returns
 */
export const verify = (
  code: string,
  alphabet: string = ID_CODE_ALPHABET,
  length: number = ID_CODE_LENGTH
) => {
  const cleanedCode = code.replace("-", "").toUpperCase();
  return (
    cleanedCode.length <= length &&
    [...cleanedCode].every((char) => alphabet.includes(char))
  );
};

export const hsc = {
  encode,
  decode,
  verify,
};
