// Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position


// Selection Sort Pseudocode
    // 1. Store the first element as the smallest value you've seen so far.
    // 2. Compare this item to the next item in the array until you find a smaller number.
    // 3. If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
    // 4. If the "minimum" is not the value (index) you initially began with, swap the two values.
    // 5. Repeat this with the next element until the array is sorted.

// IMPLEMENTING SELECTION SORT ALGORITHM

function SelectionSort(arr) {
    // loop through the array
    for(let i = 0; i < arr.length; i++) {
        let min = i;
    //     loop through the array once to get the items on the second iteration
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        if(i !== min){
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}