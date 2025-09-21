// used in the same array doesnt change values
let arr = new Array();
arr = [1, 4, 6, 9, 8, 6, 4, 2, 1];

// special functions

arr.forEach((value, index) => {
  if (value > 3) {
    value = value * 2;
    console.log(value);
  }
});

console.log(arr);

let arr1 = new Array();
arr1 = [1, 4, 6, 9, 8, 6, 4, 2, 1];

arr = arr1.map((value, index) => {
  value = value * 2;
  console.log(value);
});
