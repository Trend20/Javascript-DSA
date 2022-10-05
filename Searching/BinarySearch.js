/*

Binary Search

Binary search is a searching algorithm that works on sorted data. Unlike the linear search algorithm, 
in which every element of the array is checked, binary searches can check the middle value to see whether 
the desired value is greater or smaller than it. If the desired value is smaller, 
this algorithm can search through the smaller parts, or it can search through the bigger parts if the desired value is bigger.

*/
// Time Complexity: O(log n)

// EXAMPLE
function binarySearch(arr, target){
  // iterate through all the array items
  let start = 0;
  let end = arr.length - 1;

  for(let i = 0; i < arr.length; i++){
    let middle = Math.floor((start + end) / 2);

    if(arr[middle] = target){
      return target;
    }else if(arr[middle] < target){
      start = middle + 1;
    }else{
      end = middle - 1;
    }
  }
}

console.log(linearSearch([1, 3, 5, 7, 9], 6));