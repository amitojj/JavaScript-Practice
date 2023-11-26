// function findTwoSum(arr, targetSum) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === targetSum) return [arr[i], arr[j]];
//     }
//   }
// }
// Test your function
const numbers = [2, 7, 11, 15];
const target = 26;
console.log(findTwoSum(numbers, target)); // Should print [0, 1] because numbers[0] + numbers[1] equals 9


// preferred method
function findTwoSum(arr, targetSum) {
  const numMap = {};

  for (let i = 0; i < arr.length; i++) {
    const complement = targetSum - arr[i];

    if (numMap[complement] !== undefined) {
      return [numMap[complement], i];
    }

    numMap[arr[i]] = i;
  }

  return null; // If no such pair is found
}
