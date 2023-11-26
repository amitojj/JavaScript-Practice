function isPalindrome(str) {
  const alphaNumericStr = alphanumerics(str);
  len = alphaNumericStr.length;
  for (let i = 0; i < len; i++) {
    if (alphaNumericStr[i] !== alphaNumericStr[len - 1 - i]) {
      return false;
    }
    return true;
  }
}
function alphanumerics(str) {
  let alphaNumericStr = "";
  for (let i = 0; i < str.length; i++) {
    if (
      (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) ||
      (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) ||
      (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57)
    ) {
      alphaNumericStr += str[i];
    }
  }
  return alphaNumericStr.toLowerCase();
}
// Test your function
console.log(isPalindrome("A man a plan a canal Panama")); // Should print true
console.log(isPalindrome("hannah")); // Should print true
console.log(isPalindrome("amit")); // Should print false
