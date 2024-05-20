function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
countUniqueValues([1,2,2,5,7,7,99])


// EXAMPLE 2
// count unique pairs in an array

const countUniquePairs = arr =>{
    if(arr.length === 0) return 0;
    let first = 0;

//     loop through the array to get the other pointer
    for(let last = i + 1; last < arr.length; last++){
        if(arr[first] !== arr[last]){
            first++;
            arr[first] = arr[last];
        }
    }
    return first + 1;
}
