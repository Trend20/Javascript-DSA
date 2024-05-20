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
    for (var i= 0; i < array.length; i++) {
      for (var j= 0; j < array.length; j++) {
        if (array[j] > array[j + 1]) {
          let tempVal = array[j];
          array[j] = array[j + 1];
          array[j + 1] = tempVal;
        }
      }
    }
    return array;
  }
     bubbleSort([6,1,2,3,4,5]); // [1,2,3,4,5,6]
    // Time Complexity: O(n^2)
    // Space Complexity: O(1)

//IMPLEMENTING BUBBLE SORT

//solution one
const sort = (arr) => {
//   loop through the arr twice
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
      if(arr[j] > arr[j + 1]){
      //   swap
        let temp = arr[j];
        arr[j] = arr[j + 1]
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}


//solution two
const sort2 = (arr) => {
//   loop through the arr twice
  for(let i = arr.length; i > 0 ; i--){
    for(let j = 0; j < i -1; j++){
      if(arr[j] > arr[j + 1]){
        //   swap
        let temp = arr[j];
        arr[j] = arr[j + 1]
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}