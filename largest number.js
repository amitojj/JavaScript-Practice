//

// Problem: Find the Largest Number

// Write a JavaScript function named findLargestNumber that takes an array of numbers as a parameter and returns the largest number in the array. The function should handle arrays of any length.

function findLargestNumber(arr) {
  let largestNumber = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      largestNumber = arr[i]
    }
  }
  return largestNumber
}

numArr = [23, 54, 87, 32, 99];
console.log(findLargestNumber(numArr));
