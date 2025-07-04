# Human Short Code

Encode integers into compact, human-readable codes and decode them reliably.  
Useful for generating invitation codes, referral links, tracking IDs, or session tokens.

## Features

- Encode numbers into fixed-length readable codes  
- Decode codes back to original numbers  
- Validate code format  
- Customizable alphabet and length  
- Mid-string hyphen for clarity  

## Installation

```bash
pip install human-short-code
```

Or install from source:

```bash
git clone https://github.com/yourusername/human-short-code.git
cd human-short-code
python -m build
pip install dist/*.whl
```

## Usage

```python
from human_short_code import encode, decode, verify

number = 123456789

# Encode number
code = encode(number)
print(code)  # e.g. 'QIUN-ESAD'

# Decode code
original = decode(code)
print(original)  # 123456789

# Verify code format
print(verify(code))  # True
```

## API

`encode(id_number: int, alphabet: str = ..., length: int = ...) -> str`

Convert an integer into a short, fixed-length alphanumeric code.

- id_number — Integer to encode
- alphabet — Optional custom alphabet (default: "ASDEIUNWRQXBOKH")
- length — Total code length excluding hyphen (default: 8)

Returns a code string with a hyphen inserted at the center.

`decode(code: str, alphabet: str = ..., length: int = ...) -> int`

Decode a code string back into the original integer.

- code — Code string to decode
- alphabet — Optional custom alphabet used in encoding
- length — Expected code length excluding hyphen

Raises ValueError if invalid input.

`verify(code: str, alphabet: str = ..., length: int = ...) -> bool`

Check if a code is valid for the given alphabet and length.

- code — Code string to verify
- alphabet — Optional alphabet to validate against
- length — Maximum code length excluding hyphen

Returns True if valid, False otherwise.

## Customization

```python
custom_alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ"
custom_length = 6

code = encode(987654, custom_alphabet, custom_length)
print(code)  # e.g. 'BAC-DEF'

number = decode(code, custom_alphabet, custom_length)
print(number)  # 987654
```

## Tests

```bash
pytest
```

## License

MIT
