function findLargestNumber(arr: number[]): number {
    let max: number = arr[0]; // assuming this is the largest
    for (let i: number = 0; i < arr.length; i++){
      if (max < arr[i]){
        max = arr[i];
      }
    }
    return max;
  }
  let arr1: number[] = [];
  arr1.push(1,4,2,6,8,9,43,6,1,10,2);
  console.log(findLargestNumber(arr1));
  