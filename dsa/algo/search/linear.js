// linear search
function linearSearch(arr, target){
    n = arr.length;
    for (let i = 0; i < n; i++){
      if (arr[i] == target){
        return i;
      }
    }
  }
  
  arr = [1,2,3,4,5,6,7,8,9,10]
  let index = linearSearch(arr, 5)
  console.log(index + 1)