# Working with arrays Assignment

## 1. Walk through each step of implementing an array. 
Don't rush through this by copying and pasting the code samples. After you've walked through it and you understand the code of the Array class, hide the sample code and try writing the Array class from scratch using the memory module here for allocating memory.

* Answer: Array class implemented in `array.js`.

## 2. Using the Array class you just created above, add an item to the array. 
Use the following function:

```
function main(){

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push(3);

    console.log(arr);
}
```

What is the length, capacity and memory address of your array?
* Answer: `Array { length: 1, _capacity: 3, ptr: 0 }`

Add the following in the main function and then print the array:

```
...
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
```

What is the length, capacity and memory address of your array? Explain the result of your program after adding the new lines of code.
* Answer: `Array { length: 6, _capacity: 12, ptr: 3 }` The array has a length of 6 values, because we pushed in six numbers. 
* The capacity is 12, because the `SIZE_RATIO` value is 3 and in the push method of the Array class, it requires the capacity get increased, if the push makes the length longer than the `_capacity`. It takes the existing length + 1 then multiplies it by the `SIZE_RATIO` (3). Thus, (0 + 1) * 3 = 3. Then, with the fourth push, (3 + 1) * 3 = 12.
* The memory address is 3, because that is the first box in the expanded memory block.

## 3. Add the following in the main function and then print the array:

```
...
    arr.pop();
    arr.pop();
    arr.pop();
```

What is the length, capacity, and address of your array? Explain the result of your program after adding the new lines of code.
* `Array { length: 3, _capacity: 12, ptr: 3 }` The pop method removed the last item of the array each time it was called.

## 4. Understanding more about how arrays work.

Print the 1st item in the array `arr`.
* Answer: Time complexity is O(1). `console.log(arr.get(0));`

Empty the array and add just 1 item: `arr.push("tauhida")`.
* Answer: Time complexity is O(1).
```
    arr.pop();
    arr.pop();
    arr.pop();
    arr.push("tauhida")
```

Print this 1 item that you just added. What is the result? Can you explain your result?
* Answer: Time complexity is O(1). `NaN`, because the input is a string and not a number.

What is the purpose of the `_resize()` function in your Array class?
* Answer: To increase the amount of memory for new items as they get added.