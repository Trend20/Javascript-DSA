/*

Binary Search

Binary search is a searching algorithm that works on sorted data. Unlike the linear search algorithm, 
in which every element of the array is checked, binary searches can check the middle value to see whether 
the desired value is greater or smaller than it. If the desired value is smaller, 
this algorithm can search through the smaller parts, or it can search through the bigger parts if the desired value is bigger.

*/
// Time Complexity: O(log n)

// EXAMPLE  1
function binarySearch(arr, target){
  // iterate through all the array items
  let start = 0;
  let end = arr.length - 1;

  while(start < end){
    let middle = Math.floor((start + end) / 2);

    // ONLY COMPARE THE MIDDLE VALUE WITH THE TARGET
    if(arr[middle] === target){
      return target;
    }else if(arr[middle] < target){
      start = middle + 1;
    }else{
      end = middle - 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 3, 5, 7, 9], 6));


// EXAMPLE 2(WE USE DIVIDE AND CONQUER ALGORITHM PATTERN)

// Write a function called binarySearch which accepts a sorted array
// and a value and returns the index at which the value exists.Otherwise, return -1.
// This algorithm should be more efficient than linearSearch - you can read how to
// implement it here - https:
//www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search and
// here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/

// Examples:
//     binarySearch([1,2,3,4,5],2) // 1
// binarySearch([1,2,3,4,5],3) // 2
// binarySearch([1,2,3,4,5],5) // 4
// binarySearch([1,2,3,4,5],6) // -1
// binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 10) // 2
// binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 95) // 16
// binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 100) // -1

function binarySearch2(arr, val){
  let start = 0;
  let end = arr.length -1;
  let middle = Math.floor((start + end) / 2);
  while(arr[middle] !== val && start <= end){
    if(val < arr[middle]){
      end = middle - 1;
    }else{
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if(arr[middle] === val){
    return middle;
  }
  return -1;
}

console.log( binarySearch2([1,2,3,4,5],2));

// EXAMPLE 3
// Given a sorted array of n integers and a target value, determine if the target exists in the array
// in logarithmic time using the binary search algorithm. If target exists in the array, print the index of it.

function binarySearch3(arr, target){
//   define the low, mid and high
  let low = 0;
  let high = arr.length -1;
  let mid = Math.floor((low + high) / 2);

  while(arr[mid] !== target && low <= high){
    if(target < arr[mid]){
      high = mid -1;
    }else{
      low = mid + 1;
    }
  //   define the new mid
    mid = Math.floor((low + high) / 2);
  }
  if(arr[mid] === target){
    return mid;
  }
  return -1;
}