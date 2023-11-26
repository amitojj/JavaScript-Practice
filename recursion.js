// Function to reverse a string using recursion
function reverseString(str) {
  // Base case: if the string is empty or has only one character, it is already reversed
  if (str.length <= 1) {
    return str;
  } else {
    // Recursive case: reverse the substring excluding the first character
    // and concatenate the first character at the end
    return reverseString(str.slice(1)) + str[0];
  }
}

// Example usage
const originalString = "Hello, World!";
const reversedString = reverseString(originalString);
console.log("Original String:", originalString);
console.log("Reversed String:", reversedString);
