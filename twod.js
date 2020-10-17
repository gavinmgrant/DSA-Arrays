// Write an algorithm which searches through a 2D array, and whenever it finds a 0 
// it should set the entire row and column to 0.

const twoD = arr => {
    let output = [];
    let rowCheck = [];
    let colCheck = [];

    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[i].length; j++) {
            // if any of the items in the arrays equals 0, set check values for that location to true
            if (arr[i][j] == 0) {
                rowCheck[i] = true;
                colCheck[j] = true;
            }
        }
    }

    for (let i = 0; i < arr.length; i++) {
        // make new array for each row
        if(!output[i]) {
            output[i] = [];
        }
        // use the boolean check values set above to assign a 0 or 1
        for (let j = 0; j < arr[0].length; j++) {
            if (rowCheck[i] || colCheck[j]) {
                output[i][j] = 0;
            } else {
                output[i][j] = 1;
            }
        }
    }

    return output;
};

const array = 
[[1,0,1,1,0],
[0,1,1,1,0],
[1,1,1,1,1],
[1,0,1,1,1],
[1,1,1,1,1]];

console.log(twoD(array))

// complexity: 0(n)