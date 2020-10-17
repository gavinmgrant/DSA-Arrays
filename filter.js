// Write an algorithm to remove all numbers less than 5 from the array. DO NOT use Array's built-in .filter() method.

const filterArr = array => {
    const newArr = [];

    for (let i = 0; i <= array.length; i++) {
        // if item is equal to or greater than 5, add it to the new array
        if (array[i] >= 5) {
            newArr.push(array[i]);
        }
    }

    return newArr;
};

console.log(filterArr([5, 10, 1, 2, 12, 9]));

// complexity: O(n)