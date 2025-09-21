// Merge Sort
function divide(arr){
    let len = arr.length;
    if (len < 2){
      return arr;
    } 
    let mid = Math.floor(len/2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, len);
    let sortedLeft = divide(left);
    let sortedRight = divide(right);
    let sortarr = mergeSort(sortedLeft, sortedRight);
    return sortarr;
  }
  
  function mergeSort(left, right){
    let i = 0;
    let j = 0;
    let arr = new Array();
    while(i < left.length && j < right.length){
      if (left[i] < right[j]){
        arr.push(left[i]);
        i++;
      } else {
        arr.push(right[j]);
        j++;
      }
    }
    return arr.concat(left.slice(i)).concat(right.slice(j));
  }
  
  let arr = new Array(5, 4, 3, 2, 1);
  let sort = divide(arr);
  console.log(sort);