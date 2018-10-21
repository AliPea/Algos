
// Rules:
// Every word should be reversered but not the string as a awhole
// Can't use the array.reverse() method


// 1, split string and save in word array
// 2, create new empty array where we will put our reversed words
// 3, for each word in the word array
// 4, create empty string
// 5, loop through the length of the word backwards
// 6, add each reversed letter into the empty string variable
// 7, push this reversed word into the empty array for reversed words
// 8, join(' ') the array of reversed words and return it


function reverseWords(string) {
  var wordsArr = string.split(' ');
  var reverseWordArr = [];

  wordsArr.forEach(word =>{
    var reverseWord = '';
    for(var i = word.length - 1; i >= 0; i--) {
      reverseWord += word[i];
    }
    reverseWordArr.push(reverseWord);
  });

  return reverseWordArr.join(' ');
}

console.log(reverseWords('Coding JavaScript'));
