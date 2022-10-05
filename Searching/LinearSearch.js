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

// EXAMPLE
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