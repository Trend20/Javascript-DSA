// EXAMPLE
/*
  Write a function called same which accepts two arrays and the function should return TRUE if every value in
  the array has its corresponding values squared in the second array else return FALSE. 
  THE FREQUENCY OF VALUES MUST BE THE SAME.
*/
// NAIVE SOLUTION: O(n^2)
const sameFrequency = (arr1, arr2) =>{
//   check if the two arrays have got the same length
  if(arr1.length !== arr2.length){
    return false;
  }
//   loop through the first array and compare value squared to the values of the second array
  for(let i = 0; i < arr1.length; i++){
    let correctIndex = arr2.indexOf(arr1[i] **2)
    if(correctIndex === -1){
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}
arr1=[1, 2, 3, 4, 5 ];
arr2=[1, 4, 9, 16, 25];
console.log(sameFrequency(arr1, arr2));

// OPTIMIZED SOLUTION: 0(n) (FREQUENCY COUNTER)
const same = (arr1, arr2) =>{
  if(arr1.length !== arr2.length){
    return false;
  }
//   define frequencies
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

//   loop to check frequencies
  for(let val of arr1){
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) +1
  }
  for(let val of arr2){
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) +1
  }
//   check if value exist
  for(let key in frequencyCounter1){
    if(!(key ** 2 in frequencyCounter2)){
      return false;
    }
    if(frequencyCounter2[key ** 2] !== frequencyCounter2[key]){
      return false;
    }
  }
  return true;
}
