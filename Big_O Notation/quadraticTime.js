/*
Quadratic algorithm

The quadratic algorithm is almost the reverse of the logarithmic algorithm. 
The number of steps required by the quadratic algorithms is the square root of input size. 
If the input size is 2, then the required steps are 4. If the input is size 8, it will take 64, and so on. and we mark it as O(n²).

BUBBLE SORT

  Bubble sort compares adjacent elements, It starts with the first two elements and it interchanges
  them if the first element is larger than the second element. 
  it repeats the same steps until it reaches the end of the array. 
  again the same steps will repeat from the i+1 element.

 */

  // Example: Nested loops

  // Implementing Bubble sort algorithm

  function BubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
      for(let j = i + 1; j < arr.length; j++){
        if(arr[i] < arr[j]){
          let tempVal = arr[i]
          arr[i] = arr[j]
          arr[j] = tempVal
        }
      }
    }
    return arr;
  }