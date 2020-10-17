// Write an algorithm that deletes given characters from a string. 
// For example, given a string of "Battle of the Vowels: Hawaii vs. Grozny" 
// and the characters to be removed are "aeiou", 
// the algorithm should transform the original string to "Bttl f th Vwls: Hw vs. Grzny". 
// Do not use Javascript's filter, split, or join methods.

const removeChar = (string, remove) => {
    const stringArr = [];
    const removeArr = [];
    
    // convert strings to arrays
    for (let i = 0; i < string.length; i++) {
        stringArr.push(string.charAt(i));
    }
    for (let i = 0; i < remove.length; i++) {
        removeArr.push(remove.charAt(i));
    }

    // remove letters in the string that match the letters to remove
    removeArr.forEach(letterToRemove => {
        stringArr.forEach((letter, index) => {
            if (letterToRemove === letter) {
                stringArr.splice(index, 1)
            }
        })
    });

    let result = '';

    // convert array back to string
    for (let i = 0; i < stringArr.length; i++) {
        let letter = stringArr[i];
        result = result.concat(letter);
    }

    return result;
};

console.log(removeChar('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));

// complexity: O(1)