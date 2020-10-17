// You are given an array containing positive and negative integers. 
// Write an algorithm which will find the largest sum in a continuous sequence.

const maxSum = arr => {
    let maxNow = 0;
    let maxAll = 0;

    for (let i = 0; i < arr.length; i++) {
        // Math.max() function returns the largest of the zero or more numbers given as input parameters
        // determine the maximum sum of the numbers in this iteration
        maxNow = Math.max(0, maxNow + arr[i]);
        // determine the highest max for all sums
        maxAll = Math.max(maxAll, maxNow);

        let iteration = i + 1;
        console.log(`Round ${iteration} \n` + `  number: ${arr[i]}\n` + `  max now: ${maxNow}\n` + `  max all: ${maxAll}\n`);
    }

    return maxAll;
  }
  
  console.log(maxSum([4, 6, -3, 5, -2, 1]));