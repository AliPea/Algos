// This algo returns the mean, median and mode of all the numbers in the array.
// Mean: of all numbers in array
// Median: the middle of num in array after being sorted
// Mode: of all numbers in array. Hash table object with each letter x times it repeats
// Four separate functions
// Techniques for math calculations & Functional programming
// Func programming: breaking your algorithms into functions so that these functions can be reused

// 1, create four functions, meanMedianMode(array), getMean(array), getMedian(array), getMode(array)

// meanMedianMode(array) return {mean: getMean(arr), median: getMedian(arr), mode: getMode(arr)}

// 2, getMean function: declare var sum = 0.
// For each num in array, sum += num;
// var mean = sum / arr.length;
// return meanMedianMode

// 3, getMedian function: array.sort(function(a,b) {returns a-b}) this is a JS-built-in method
// declare var median
// two cases to take care of: case where there odd number of elements in the array where we grab
// the element in the middle
// and the case in which there's even number of elements and we need to grab the two middle
// elements and return the average of the two
// Case 1: odd number of elements: if(arr.length % 2 !== 0)
// { median = array[math.floor(array.length/2)] } Is this part that gives us the index of the
// middle element
// Case 2: Even number of elements in the array. Grabbing two middle elements:
// var mid1 = array[array.length/2 - 1]
// var mid2 = array[array.length/2]
// median = (mid1+mid2)/2
// return Median

// 4, getMode function: use technique used in harmless ransom note algorithm of using object
// as hash table
// var modeObject = {}
// for each num in array => if(!modeObject[num]) modeObject[num]=0
// modeObject[num]++
// now we want to loop through each num property in the modeObject
// for (var num in modeObject)
// you need to keep track of max frequency that a num shows up
// and keep track of the modes
// do this with two variables, var maxFrequency = 0; var mode = [];
// for loop. check if the frequency of that number is greater than maxFrequency
// then modes = [ num ];
// maxFrequency = modeObject[num];
// The situation to take care of is, what if the current number has the same frequency as the
// maxFrequency if(modeObj[num] === maxFrequency) modes.push(num)
// Edge case: what if every number appear the same number of times? In that case there'd be no modes
// if(modes.length === Object.keys(modeObject).length) modes = []; // this gives us the value of
// how many properties there are in our modeObject.
// return modes


function meanMedianMode(arr) {
  return {
    mean: getMean(arr),
    median: getMedian(arr),
    mode: getMode(arr)
  }
}

function getMean(arr) {
  let sum = 0;

  arr.forEach(num => {
    sum += num;
  });

  var mean = sum / arr.length;
  return mean;
}

function getMedian(arr) {
  arr.sort(function(a,b) {return a - b});
  var median;

  // Odd case
  if(arr.length % 2 !== 0){
    median = arr[Math.floor(arr.length/2)];
  } else {
    //Even case
    var mid1 = arr[arr.length / 2 - 1];
    var mid2 = arr[arr.length / 2];
    median = (mid1+mid2)/2;
  }
  return median;
}

function getMode(arr) {
  var modeObj = {};

  arr.forEach(num => {
    if(!modeObj[num]) modeObj[num] = 0;
    modeObj[num]++;
  });

  let maxFrequency = 0;
  let modes = [];

  for(var num in modeObj) {
    if(modeObj[num] > maxFrequency) {
      modes = [ num ];
      maxFrequency = modeObj[num];
    }
    else if(modeObj[num] === maxFrequency) modes.push(num);
  }

  if(modes.length === Object.keys(modeObj).length) modes = [];
  return modes;
}

console.log(meanMedianMode([1,2,3,1,2,3]));
