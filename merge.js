// Imagine you have 2 arrays which have already been sorted. 
// Write an algorithm to merge the 2 arrays into a single array, which should also be sorted.

const mergeArr = (arr1, arr2) => {
    // combine the two arrays
    const newArr = arr1.concat(arr2);
    // add compare function to sort numbers in the array
    return newArr.sort((a, b) => a - b);
};

console.log(mergeArr([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));

// complexity: O(n)