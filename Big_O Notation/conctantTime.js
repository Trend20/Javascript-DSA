/*

An algorithm is said to run in constant time. 
It means that as you increase the size of the input to the function. 
The execution time remains the same.

 */

// Example: Accessing an element inside an array using its index

function printTheLastElementOfArray(arr){
  return `The last element of the array is ${arr[4]}`;
}
printTheLastElementOfArray([2, 3, 5, 7, 9]);