// Given 2 strings, str1 and str2, write a program that checks if str2 is a rotation of str1.
// Input: amazon, azonma  Output: false
// Input: amazon, azonam  Output: true

const stringRotation = (str1, str2) => {
    // first check if the two strings are the same length and return false if not
    if (str1.length !== str2.length) {
        return false;
    };

    let double = str1 + str1;
    console.log(double);

    // indexOf method returns -1 if occurence is not found
    // if str2 cannot be found in double, a -1 is returned and the result is false
    if (double.indexOf(str2) === -1) {
        return false;
    } else {
        return true;
    };

};

console.log(stringRotation('amazon', 'zonama'));