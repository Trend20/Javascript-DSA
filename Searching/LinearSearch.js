/*

Linear Search
A linear search works by going through each element of the array one index after another sequentially.
The following code example is an implementation of a linear search that iterates through the entire 
array of numbers to find out whether 4 and 5 exist within the array.

As another example, with an array of [1,2,3,4,5] and a search term of 3, it would take three iterations
to complete (1, 2, 3). The reason why this algorithm has a Big-O of O(n) is that, in the worst-case scenario, 
the entire array needs to be iterated. For example, if the search term is 5, it takes five iterations (1, 2, 3, 4, 5). 
If 6 is the search term, it goes through the entire array (1, 2, 3, 4, 5) and then returns false because it was not found.

A linear search algorithm like this is great 
because it works whether or not the array is sorted. In a linear search algorithm, 
every element of the array is checked. So, you should use a linear search when the array 
is not sorted. If the array is sorted, you can do the search faster via a binary search.
*/

// Time Complexity: O(n)

// EXAMPLE 1
function linearSearch(arr, target){
  // iterate through all the array items
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === target){
      return true
    }
  }
  return false;
}

console.log(linearSearch([1, 3, 5, 7, 9], 6));

//EXAMPLE 2
//     Write a function called linearSearch which accepts an array and a value,
//     and returns the index at which the value exists. If the value does not exist in the array, return -1.

    // Don't use indexOf to implement this function!

    // Examples:
    // linearSearch([10, 15, 20, 25, 30], 15) // 1
    // linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) // 5
    // linearSearch([100], 100) // 0
    // linearSearch([1,2,3,4,5], 6) // -1
    // linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10) // -1
    // linearSearch([100], 200) // -1

function  linearSearch2(arr, val){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === val){
      return i;
    }
  }
  return -1;
}

console.log(linearSearch2([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4));