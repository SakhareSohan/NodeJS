function reverseString(str){
    let arr = str.split('');
    let n= arr.length;
    for (let i= 0; i < Math.floor(n/2); i++){
      let j = n-i
      if (j > Math.floor(n/2)){
        let temp= arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
    let result = arr.join('');
    return result
  }
  let aba= "hell"
  console.log(reverseString(aba))