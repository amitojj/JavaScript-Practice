
// ─── Array From Number ─────────────────────────────────────────────────── ✣ ─
const num = 7;
const arr = Array.from({ length: num }, (_, Index) => {
  return Index + 1;
});
console.log(arr);
// ─── Or ────────────────────────────────────────────────────────────────── ✣ ─
const numarr = Array.from(Array(num), (_, Index) => {
  return Index + 1;
});
console.log(numarr);

// Syntax of  Array.from it takes two parameters 1st is an array like object thats iterable. object with   length property is an array like object . 
//  (_, Index) =>  array.from has 2nd parameter that is an optional  mapping function - A function to call on every element of the array. If provided, every value to be added to the array is first passed through this function, and mapFn's return value is added to the array instead. The function is called with the following arguments:element and index.  element is the variable name given to current element in array that is passing through the function. _ is the common convention for a variable name that we dont need to use anywhere. we need the index as index starts from 0 and we need numbers from 1 till num so we will return index+1 as the value being passed to the array. 