// Remove Duplicates from an Array:
// Write a function that removes duplicate elements from an array.
let arr = [1,2,3,4,5,3,2,6,7,3,8]
function duplicate_ele(arr){
  let n = arr.length;
  for (let i = 0; i < arr.length; i++){
    for (let j = i+1; j < arr.length; j++){
      if (arr[i] == arr[j]){
        arr.splice(j, 1); // Remove the duplicate element
        j--;
      }
    }
  }
  // for (let i = 0; i < arr.length-1; i++){
  //   // if (arr[i] !== null){
  //     let j = i + 1;
  //     while(j < arr.length){
  //       if (arr[i] == arr[j]){
  //         arr[j] = null
  //       }
  //       j++
  //     }
  //   // }
  // }
  // arr = arr.filter((index) => index != null);
  return arr
}
console.log(duplicate_ele(arr))
