function customForEach(arr, callback) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i]));
  }
  return newArr;
}

let arr = [1, 2, 3];

function square(x) {
  return x * x;
}

let result = customForEach(arr, square);
console.log(result);
