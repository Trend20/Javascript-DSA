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



  // BUBBLE-SORT LEETCODE SOLUTION 
  /* 
  You are given an array of strings names, and an array heights that consists of distinct positive integers. 
  Both arrays are of length n.
  For each index i, names[i] and heights[i] denote the name and height of the ith person.
  Return names sorted in descending order by the people's heights.
  // SOLUTION
  */
 function sortPeople(names, heights){
  // declare an empty array for the results
  let results = [];
  // loop through the names array
  for(let i = 0; i < names.length; i++){
    // push the resulting object interms of key value pairs to the initialized result array
    results.push({names: names[i], heights: heights[i]})
  }
  //  sort the heights array in a descending order
  let sortedHeightArray = results.sort((a, b) => b.heights - a.heights);
  // map the names using the sorted heights array
  return sortedHeightArray.map(el => el.names);
 }

