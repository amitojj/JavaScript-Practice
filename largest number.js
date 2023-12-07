//

// Problem: Find the Largest Number

// Write a JavaScript function named findLargestNumber that takes an array of numbers as a parameter and returns the largest number in the array. The function should handle arrays of any length.

// ─── Using Conditionals ────────────────────────────────────────────────── ✣ ─

function findLargestNumber(arr) {
  let largestNumber = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      largestNumber = arr[i]
    }
  }
  return largestNumber
}

let numArr = [23, 54, 87, 32, 99,133];
console.log(findLargestNumber(numArr));

// ─── Using Reduce ──────────────────────────────────────────────────────── ✣ ─
function largestnum(arr){
  return arr.reduce((acc, item) => {
    return item > acc ? item : acc;
  }, -Infinity);
}
console.log(largestnum(numArr));

 // ─── Using Math.max ────────────────────────────────────────────────────── ✣ ─

 console.log(Math.max(...numArr));

 // ─── Using Sort ────────────────────────────────────────────────────────── ✣ ─
 let newArr = numArr.sort((a, b) => b-a)
 console.log(newArr[0]);

