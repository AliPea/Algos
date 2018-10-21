// Ceasar Cipher, you are given a string and a num. You have to shift the letters on the string on the alphabet by the number

// 1, turn the string to lower case
// 2, save alphabet and split it
// 3, create an empty string where we'll save the shifted letters
// 4, loop through the length of the lowercased string
// 5, save the current letter at which you are [i]
// 6, if the current letter at which you're at is an empty space then += it the empty string
// 7, continue
// 8, save the indexOf the current letter
// 9, this index + num is the new index
// EDGE CASES
// 10, if the new index is greater than the number of indexes in the alphabet (25) then the new
// index is equal to the new index - 26.
// 11, if the new index is less than 0, then the new index is 26 + new index
// 12, if the num passed was greater than 26 or less than -26 then we want to continue looping
// through the alphabet. For this we must make num = num % 26;
// 13, if the string letter is upper case we want to add it as uppercase into our new string
// for this, we will check if the str[i] === stri[i].toUpperCase, then new string += alphabet[new
// index].toUpperCase()
// 14, else new string += the letter of the alphabet positioned at the new index
// 15, return the new string


function ceasarCipher(str, num) {
  num = num % 26;
  var lowerStr = str.toLowerCase();
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var newStr = '';

  for (var i=0; i < lowerStr.length; i++) {
    var currentLetter = lowerStr[i];
    if(currentLetter === ' ') {
      newStr += currentLetter;
      continue;
    }

    var currentIndex = alphabet.indexOf(currentLetter);
    var newIndex = currentIndex + num;

    if(newIndex > 25) newIndex = newIndex - 26;
    if(newIndex < 0) newIndex = 26 + newIndex;

    if(str[i] === str[i].toUpperCase()) {
      newStr += alphabet[newIndex].toUpperCase();
    }
    else newStr += alphabet[newIndex];
  };

  return newStr;
}

console.log(ceasarCipher('Zoo Keeper', 2));
