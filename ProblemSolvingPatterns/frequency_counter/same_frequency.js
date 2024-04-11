// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function sameFrequency(num1, num2) {
  // good luck. Add any arguments you deem necessary.
  // convert the integers to an array of digits
  const num1Arr = Array.from(String(num1), Number);
  const num2Arr = Array.from(String(num2), Number);

  // check if the length of two arrays are the same
  if (num1Arr.length !== num2Arr.length) {
    return false;
  }
  let counter1 = {};
  let counter2 = {};

  // loop through the first array
  for (let val of num1Arr) {
    counter1[val] = (counter1[val] || 0) + 1;
  }

  // loop through the first array
  for (let val of num2Arr) {
    counter2[val] = (counter2[val] || 0) + 1;
  }

  
}
