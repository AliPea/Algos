//Two Sum:
// function takes an array and a sum
// Return every pair of nums from array that add up to sum

// Guideliness
// Result should be an array of arrays
// any num in array can be used in multiple pairs

// Solutions can be O(n^2) Exponential runtime and/or O(n) Linear runtime

// 1, function takes arr and Sum
// 2, define empty array where the pairs will go
// 3, for each i in the arr.length
// 4, store current number of the index your on at the array
// 5, Define hashtable as empty array
// 6, Find the counter part of current number. Which will be sum - currentNum
// 7, Check to see if index of counterpart is NOT the hashtable: hashtable.indexOf(counterpart) !== // -1 { push both pairs into the pairs array}
// 8, push current number into the hashtable
// 9, return pairs

function twoSum(numArray, sum) {
  var pairs = [];
  var hashTable = [];

  for (var i = 0; i < numArray.length; i++) {
    var currNum = numArray[i];
    var counterpart = sum - currNum;
    if (hashTable.indexOf(counterpart) !== -1) {
      pairs.push([ currNum, counterpart ]);
    }
    hashTable.push(currNum);
  }

  return pairs;
}

twoSum([1, 6, 4, 5, 3, 3], 7);
