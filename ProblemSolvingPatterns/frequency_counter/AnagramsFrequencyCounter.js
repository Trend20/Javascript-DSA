// ANAGRAMS
/**
 * Given two strings, write a function to determine if the second string
 * is an anagram of the first. An ANAGRAM is a word, phrase or name
 * formed by rearranging the letters of another, such as cinema formed from iceman.
 * ASSUME ALL THE INPUTS ARE SINGLE-WORDS WITH NO SPACES WHICH ARE LOWERCASE 
 */

// FIRST SOLUTION
function validAnagram(str1, str2){
  // edge cases to ensure both arrays has the same length
  if(str1.length !== str2.length){
    return false;
  }

  // declare the two frequency counters for the two arrays
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  // loop through each arr and assign their frequency counters
  for(let val of str1){
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for(let val of str2){
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  // loop through the objects to determine if the keys exist
  for(let key in frequencyCounter1){
    if(!(key in frequencyCounter2)){
      return false
    }
    if(frequencyCounter1[key] !== frequencyCounter2[key]){
      return false;
    }
  }
  return true;
}

//SECOND SOLUTION
const ValidAnagram = (str1, str2) => {
  if(str1.length !== str2.length){
    return false;
  }
  let frequencyCounter = {};
  for(let i = 0; i < str1.length; i++){
    if(frequencyCounter[str1[i]]){
      frequencyCounter[str1[i]] = (frequencyCounter[str1[i]] || 0) + 1;
    }
    frequencyCounter[str1[i]] = 1;
  }
  for(let j = 0; j < str2.length; i++){
   if(!frequencyCounter[str2[j]]){
     return false;
   }
   frequencyCounter[str2[j]] -= 1;
  }

  return true;
}