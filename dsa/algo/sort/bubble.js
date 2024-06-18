// Bubble sort
// Third variable is needed else
// a+b later a-b

function bubbleSort(arr){
    for (i = 0; i < arr.length-1; i++) {
      for (j = 0; j < arr.length - 1 - i; j++) {
        if(arr[j] > arr[j+1]){
          let temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
        }
      }
    }
    return arr;
  }
  
  let arr = [5, 3, 8, 4, 6];
  let sortedarr = bubbleSort(arr);
  console.log(sortedarr);