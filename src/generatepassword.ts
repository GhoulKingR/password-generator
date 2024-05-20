type ReturnObj = {
  password: string;
  strength: number;
};

function getCharacters(
  upperLetters: boolean,
  lowerLetters: boolean,
  numbers: boolean,
  symbols: boolean
): string[] {
  const characters: string[] = [];
  if (lowerLetters) characters.push("abcdefghijklmnopqrstuvwxyz");
  if (upperLetters) characters.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  if (numbers) characters.push("1234567890");
  if (symbols) characters.push("~!@#$%^&*()_+{}|[]\\;:<,>.?/");
  return characters;
}

function getStrength(
  characterLength: number,
  upperLetters: boolean,
  lowerLetters: boolean,
  numbers: boolean,
  symbols: boolean
): number {
  let result = -1;
  if (lowerLetters && upperLetters) result++;
  if (numbers) result++;
  if (symbols) result++;
  if (characterLength >= 8) result++;
  return result;
}

export function generatePassword(
  characterLength: number,
  upperLetters: boolean,
  lowerLetters: boolean,
  numbers: boolean,
  symbols: boolean
): ReturnObj {
  if (!upperLetters && !lowerLetters && !numbers && !symbols)
    return { password: "", strength: -1 };

  const characters = getCharacters(
    upperLetters,
    lowerLetters,
    numbers,
    symbols
  );

  let password = "";

  for (let i = 0; i < characterLength; i++) {
    const chars =
      characters[Math.floor(Math.random() * 10) % characters.length];
    const pos = Math.floor(Math.random() * 100) % chars.length;
    password += chars[pos];
  }

  return {
    password,
    strength: getStrength(
      characterLength,
      upperLetters,
      lowerLetters,
      numbers,
      symbols
    ),
  };
}
