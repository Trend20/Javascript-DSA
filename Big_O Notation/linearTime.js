/*
Linear time algorithm

The execution time of the function is directly proportional to the input size. 
the run time of the function grows as the input grows, and we mark it as O(n).

// Example: Looping over an array to get each array element
 */

function findArrayElements(arr){
  for(let i = 0; i< arr.length; i++){
   console.log(`Element in an array is ${arr[i]}`)
  }
  return null;
}
const myArray = [45, 7, 89, 4,0];
findArrayElements(myArray);
// O(n) => Time Complexity