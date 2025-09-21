function binarySearch(arr, target) {
    if (arr.length === 0) {
      return -1;
    }
  
    let midIndex = Math.floor(arr.length / 2); 
    let midValue = arr[midIndex]; 
  
    if (target === midValue) {
      return midIndex; 
    } else if (target > midValue) {
     
      let rightHalf = arr.slice(midIndex + 1);
      let result = binarySearch(rightHalf, target);
      return result !== -1 ? midIndex + 1 + result : -1; //ternary operator for if.. else
    
    } else {
     
      let leftHalf = arr.slice(0, midIndex);
      return binarySearch(leftHalf, target);
    }
  }
  
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let index = binarySearch(arr, 5);
  console.log(index);

//   // Linear Search Algo
// let arr = [1,2,3,4,5,6,7,8,9]

// function binarySearch(arr, x){
//   let high = arr.length - 1;
//   let low = 0;
//   let mid;
//   while (high >= low){
//     mid = Math.floor((high + low) / 2);

//     if (arr[mid] == x){
//       return x;
//     }
//     if (arr[mid] < x){
//       low = mid + 1; 
//     }
//     if (arr[mid] > x){
//       high = mid - 1
//     }
//   }
// }

// console.log(binarySearch(arr, 6));
  