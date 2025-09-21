// Reverse an Array:
// Write a function that takes an array as input and returns the array in reverse order.

let arr = [1,2,3,4,5];
function reverse_array(arr){
  let n = arr.length;
  for (let i = 0; i < Math.floor(n/2); i++){
    let temp = arr[i];
    arr[i] = arr[n-1-i];
    arr[n-1-i] = temp
  }
  return arr
}
console.log(reverse_array(arr))