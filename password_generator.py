import random
import string
import argparse
import pyperclip


def main():
    parser = argparse.ArgumentParser(description="Generate a strong random password.")

    parser.add_argument(
        "--length", type=int, default=12, help="Length of the password (default: 12)"
    )
    parser.add_argument(
        "--upper", action="store_true", help="Include uppercase letters"
    )
    parser.add_argument(
        "--lower", action="store_true", help="Include lowercase letters"
    )
    parser.add_argument("--numbers", action="store_true", help="Include numbers")
    parser.add_argument(
        "--special", action="store_true", help="Include special characters"
    )

    args = parser.parse_args()

    password = generate_password(
        args.length, args.upper, args.lower, args.numbers, args.special
    )

    if password:
        print("Generated Password:", password)
        pyperclip.copy(password)
        print("Password copied to clipboard.")


def generate_password(
    length, use_uppercase, use_lowercase, use_numbers, use_special_chars
):
    characters = ""

    if use_uppercase:
        characters += string.ascii_uppercase
    if use_lowercase:
        characters += string.ascii_lowercase
    if use_numbers:
        characters += string.digits
    if use_special_chars:
        characters += string.punctuation

    if not characters:
        print("Please select at least one character set for the password.")
        return

    password = "".join(random.choice(characters) for _ in range(length))
    return password


if __name__ == "__main__":
    main()
