// Function to count vowels in a string
function countVowels(inputString) {
  const str = inputString.toLowerCase();
  let count = 0;
  for (let i = 0; i < inputString.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    )
      count++; 
  }
  return count
}

// Test the function
const testString = "Hello, World!";
console.log(`Number of vowels in "${testString}": ${countVowels(testString)}`);
