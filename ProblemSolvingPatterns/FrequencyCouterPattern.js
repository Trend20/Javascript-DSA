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
  
}
