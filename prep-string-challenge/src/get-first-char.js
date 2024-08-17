/* exported getFirstChar */
function getFirstChar(string) {
  return string[0];
}

function getLastChar(string) {
  return string[string.length - 1];
}

function capitalize(word) {
  const firstLetter = word[0].toUpperCase();
  const restOfWord = word.slice(1).toLowerCase();
  return firstLetter + restOfWord;
}

function isUpperCased(word) {
  let upperCaseWord = word.toUpperCase();
  if (upperCaseWord === word) {
    return true;
  } else {
    return false;
  }
}

function isLowerCased(word) {
  let lowerCaseWord = word.toLowerCase();
  if (lowerCaseWord === word) {
    return true;
  } else {
    return false;
  }
}

function isVowel(char) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  for (let i = 0; i < vowels.length; i++) {
    if (char === vowels[i]) {
      return true;
    }
  }

  return false;
}

function getWords(string) {
  if (string === '') {
    return [];
  }

  const newArray = string.split(' ');

  return newArray;
}

function reverseWord(word) {
  let reverseWOrd = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reverseWOrd += word[i];
  }
  return reverseWOrd;
}
