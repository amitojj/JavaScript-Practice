// Function to filter positive numbers
function filterPositiveNumbers(numbers) {
    // Your code here
    return numbers.filter((num) => num > 0)
    // Return a new array containing only positive numbers
}

// Test the function
const inputNumbers = [3, -1, 0, 8, -4, 7];
console.log(`Positive numbers: ${filterPositiveNumbers(inputNumbers)}`);
