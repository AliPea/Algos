//FizzBuzz is an algorith that returns Fizz if num is divisable by 3, Buzz if num is divisable by 5 and FizzBuzz if num is divisable by 3 && 5.

//Quick implementation

function fizzBuzz(num) {
  for (var i = 0; i <= num; i++) {
    if (i % 15 === 0) console.log('fizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
  }
}

fizzBuzz(100); 
