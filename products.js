// Given an array of numbers, write an algorithm that outputs an array 
// where each index is the product of all the numbers in the input array except for the number at each current index.

const products = arr => {
    const result = arr.map((num, i) => {
        // create an array of the other numbers
        const otherNums = arr.slice(0, i).concat(arr.slice((i + 1), (arr.length)))
        // multiply the other numbers
        return otherNums.reduce((acc, cur) => acc * cur)
    });
    return result;
};

console.log(products([1, 3, 9, 4]));

// complexity: O(n)