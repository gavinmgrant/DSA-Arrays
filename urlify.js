// Write a method that takes in a string and replaces all its empty spaces with a %20. Your algorithm can only make 1 pass through the string.

const urlify = string => {
    const arr = string.split('');

    const urled = arr.map(char => {
        // if character is a space, replace with %20
        if (char === ' ') {
            return char = '%20';
        // or else return the original character     
        } else {
            return char;
        }
    })

    return urled.join('');
};

console.log(urlify('www.thinkful.com /tauh ida parv een'));

// complexity: O(n)