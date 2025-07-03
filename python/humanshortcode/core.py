ID_CODE_ALPHABET = "ASDEIUNWRQXBOKH"
ID_CODE_LENGTH = 8


def encode(id_number, alphabet=ID_CODE_ALPHABET, length=ID_CODE_LENGTH):
    code_base = len(alphabet)

    # Generate indices using base conversion
    indices = []
    while id_number > 0:
        indices.append(id_number % code_base)
        id_number //= code_base

    # Pad with zeros if necessary
    indices += [0] * (length - len(indices))

    # Convert indices to corresponding letters in the alphabet
    letters = "".join(alphabet[i] for i in indices[:length])

    # Insert hyphen in the middle
    half = length // 2
    return letters[:half] + "-" + letters[half:]


def decode(id_string, alphabet=ID_CODE_ALPHABET, length=ID_CODE_LENGTH):
    code_base = len(alphabet)

    # Remove hyphen, ensure uppercase, and pad to length if necessary
    id_string = id_string.replace("-", "").upper().ljust(length, alphabet[0])

    # Convert the string back to a number
    number = sum(alphabet.index(c) * (code_base**i) for i, c in enumerate(id_string))

    return number
