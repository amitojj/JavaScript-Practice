// Function to calculate factorial using reduce
function calculateFactorial(n) {
    const arr= Array.from({length: n}, (_,index) => index+1);
    return arr.reduce((acc,item) => acc*item, 1)
  // Your code here
  // Return the factorial of n
}

// Test the function
const number = 5;
console.log(`Factorial of ${number}: ${calculateFactorial(number)}`);
