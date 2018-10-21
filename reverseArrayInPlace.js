// Rules:
// Manipulate the array passed in
// Do not define new arrays to push elements into
// Do not use array.reverse method
// Use skill of using a temporary variable

// 1, pass an array into function
// 2, use for loop to iterate through length of array
// 3, switch first element of array with last element of array
// to do this, using a temp var = equals array at position i
// 4, set i-th element of the array to be equal to its counterpart
// arr[i] = arr[arr.legth - 1 - i]. The -i is what makes it the counterpart of arr[i]
// 5, now set the counterpart to equal the temp variable
// 6, return array
// 7, however, the array we will get back will be the same array as it will keep looping thru the
// array reversing all the elements again. To prevent this we only need to loop thru the first half
// of the array


function reverseArrayInPlace(arr) {
  for (var i = 0; i < arr.length / 2; i++) {
    var tempVar = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tempVar;
  }

  return arr;
}

reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7, 8]);
