// after reducing a message to lower case and eliminating any special characters, does the work write itself the same in reverse?

function isPalindrome(string) {
  string = string.toLowerCase();
  var charactersArr = string.split('');
  var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  var lettersArr = [];
  charactersArr.forEach(char => {
    if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
  });

  return lettersArr.join('') === lettersArr.reverse().join('');
}

console.log(isPalindrome("Madam, I'm Adam"));
