// selection sorting
function selectionSort(arr){
    for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
    return arr;
  }
  let arr = [1,3,5,6,8,94,2,4,74,2,2,4,7,8,4,1]
  console.log(selectionSort(arr));