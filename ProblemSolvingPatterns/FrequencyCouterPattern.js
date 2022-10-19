// EXAMPLE
/*
  Write a function called same which accepts two arrays and the function should return TRUE if every value in
  the array has its corresponding values squared in the second array else return FALSE. 
  THE FREQUENCY OF VALUES MUST BE THE SAME
*/
// NAIVE SOLUTION: O(n^2)
function same(arr1, arr2){
  // check if the two arrays has got the same length 
  // if not return false to end the function
  if(arr1.length !== arr2.length){
    return false;
  }
  // loop through the first array
  for(let i = 0; i < arr1.length; i++){
    let correctIndex = arr2.indexOf(arr1[i] ** 2);

    // check if the declared correct index exist, and if not return false to end the function 
    if(correctIndex === -1){
      return false;
    }
    // remove the values of arr2 if they correspond to the values of arr1 squared 
    arr2.splice(correctIndex, 1);
  }
  return true;

}

// OPTIMIZED SOLUTION: 0(n)
function same(arr1, arr2){
  // first edge case to check if the arrays has the same number of items else return false to end the function
  if(arr1.length !== arr2.length){
    return false;
  }

  // declare the frequency counters for the two arrays
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  // loop through the first array 
  for(let item of arr1){
    frequencyCounter1[item] = (frequencyCounter1[item] || 0) +1
  }

  // loop through the second array
  for(let item of arr2){
    frequencyCounter2[item] = (frequencyCounter2[item] || 0) + 1;
  }

  for(let key in frequencyCounter1){
    if(!(key ** 2 in frequencyCounter2)){
      return false;
    }
    if(frequencyCounter2[ key ** 2] !== frequencyCounter1[key]){
      return false;
    }
  }
  return true;
}
