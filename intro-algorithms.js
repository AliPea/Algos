// 1.
function printFirst(arr) {
  console.log(arr[0]);
}

// 2. Counting operations per line
function printFirstLast(arr){
  console.log(arr[0]);
  console.log(arr[arr.length-1]);
}

// 3. Linear time complexity O(N)
function printAll(arr) {
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
}

// 4. While Loops evaluation for time complexity 0(1)
function firstTen(arr) {
  let i = 0;
  while(i < 10 && i < arr.length) {
    console.log(arr[10]);
    i++;
  }
}

// 5. while loop continued
function afterTen(arr) {      // 1
  let i = 11;                 // maximum of N-10 iterations
  while(i < arr.length) {     // 2
    console.log(arr[i]);      // 2
    i++;                      // 1
  }
}
// 1 + (N-10) * (2+2+1) = 5N + 51 reduce down to O(N) or Linear time complexity
// When the problem prints from index 11 to the end of the array, as the input gets larger, so does the amount of iterations in the while loop
// Are O(N)/ O(n)/ O(1) the same?

// 6. Speed the analysis up by looking at chunks of code instead of line by line. Using magnituted to analyze this example: there are linear amount of iterations and everything inside of it is constant. A Linear chunck is O(N)
function evens(arr){
  let results = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      results.push(arr[i]);
    }
  }
  return results;
}

// 7. Finding matching pairs/ since there are two nested loop, we multiply linear, linear and constant together to make quadratic O(N^2)
function findPairs(arr){
  for (let i = 0; i < arr.length; i++){    // Linear
    for(let j = 0; j < arr.length; j++){   // Linear
      if(arr[i] === arr[j]){               // Constant
        console.log(i + 'has a pair!');
      }
    }
  }
}

// JS arrays - indexOf - map - forEach - reverse - sort

// 8. Problem Set 2
// Time complexities

function matchingIndex(arr) {
 let j = 10;
 for (i = 0; i < arr.length; i++){
   if(arr[i] === j){
     console.log(i + ' we have a matching pairs!');
   }
 }
}

function evens(arr) {
  var results = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      results.push(arr[i]);
    }
  }
  return results;
}

function
