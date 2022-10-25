/*
  Bubble sorting is the simplest sorting algorithm. 
  It simply iterates over the entire array and swaps elements if one is bigger than the other.

  SWAP is a common function used in sorting. 
  It simply switches two array element values and will be 
  used as a helper function for most of the sorting algorithms mentioned.

  function swap(array, index1, index2) { 
    var temp = array[index1]; 
    array[index1] = array[index2];
     array[index2] = temp;
  }
 */
  function swap(array, index1, index2) { 
    var temp = array[index1]; 
    array[index1] = array[index2];
     array[index2] = temp;
  } 

  
  function bubbleSort(array) {
    for (var i=0, arrayLength = array.length; i<arrayLength; i++) {
    for (var j=0; j<=i; j++) {
      if (array[i] < array[j]) {
        swap(array, i, j);
    } 
  } 
}
  return array;
}
     bubbleSort([6,1,2,3,4,5]); // [1,2,3,4,5,6]
    // Time Complexity: O(n2)
    // Space Complexity: O(1)