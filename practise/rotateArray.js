// rotate array

let arr = [1,2,3,4,5,6,7,8,9];

function rotate_array_anti(arr, n){
  let remaining = [];
  for (let i = 0; i < arr.length; i++){
    let j = i + n
    if (j < arr.length){
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
  
    }
    else{
      remaining.push(arr[j]);
  
    }
  }
  // arr.splice(0, remaining);
  return arr
}

console.log(rotate_array(arr, 3))