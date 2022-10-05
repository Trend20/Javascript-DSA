// BUBBLE-SORT LEETCODE SOLUTION 
  /* 
  You are given an array of strings names, and an array heights that consists of distinct positive integers. 
  Both arrays are of length n.
  For each index i, names[i] and heights[i] denote the name and height of the ith person.
  Return names sorted in descending order by the people's heights.
  // SOLUTION
  */

  function sortPeople(names, heights){
    let resultArray = [];
    // loop through the names and sort using the heights
    for(let i = 0; i < names.length; i++){
      // push the resulting object to the resultArray
      resultArray.push({names: names[i], heights: heights[i]})
      // sort the heights in descending order
      let sortedHeightArray = resultArray.sort((a, b) => b.heights -a.heights)

      // map the result to the names array and return
      return sortedHeightArray.map(el => el.names);
    }
    return null;
  }