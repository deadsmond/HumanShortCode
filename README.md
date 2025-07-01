# Human Short Code

Small function to replace long numbers with ABCD-EFGH code ids.

Encode numbers into short, human-friendly codes and decode them back reliably.  

Useful for generating referral codes, room codes, or compact IDs with a custom alphabet.

## Features

- Encode numbers to short strings with a custom alphabet  
- Decode short strings back to numbers  
- Verify if a code is valid  
- Configurable code length and alphabet  
- Inserts a hyphen in the middle for better readability  

## Installation

```bash
npm install human-short-code
```

or

```bash
yarn add human-short-code
```

## Usage

```typescript
import { hsc } from "human-short-code";

const myNumber = 123456789;

// Encode number to short code
const shortCode = hsc.encode(myNumber);
console.log(shortCode); // Example output: "QIUN-ESAD"

// Decode short code back to number
const originalNumber = hsc.decode(shortCode);
console.log(originalNumber); // 123456789

// Verify if a code is valid
const isValid = hsc.verify(shortCode);
console.log(isValid); // true
```

## API

`hsc.encode(idNumber: number, alphabet?: string, length?: number): string`

Encode a number into a human-readable short code.

- idNumber — Number to encode
- alphabet — Optional custom alphabet string (default: "ASDEIUNWRQXBOKH")
- length — Length of the generated code excluding hyphen (default: 8)

Returns a string code with a hyphen inserted in the middle.

`hsc.decode(idString: string, alphabet?: string, length?: number): number`

Decode a short code string back into a number.

- idString — The short code to decode
- alphabet — Optional alphabet used during encoding (default: "ASDEIUNWRQXBOKH")
- length — Expected code length excluding hyphen (default: 8)

Throws an error if the code is invalid.

`hsc.verify(code: string, alphabet?: string, length?: number): boolean`

Check if a short code string is valid.

- code — Code string to verify
- alphabet — Alphabet used for validation (default: "ASDEIUNWRQXBOKH")
- length — Maximum allowed length excluding hyphen (default: 8)

Returns true if valid, otherwise false.

## Customization

You can customize the alphabet and code length:

```typescript
const customAlphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ"; // no confusing letters like I, O
const codeLength = 6;

const code = hsc.encode(987654, customAlphabet, codeLength);
console.log(code); // e.g. "BAC-DEF"

const num = hsc.decode(code, customAlphabet, codeLength);
console.log(num); // 987654
```

## Tests

`npm run test`
