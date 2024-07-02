// Similar elements

// arr to set
let arr = [1,2,2,1,4,6,4,8,9]
let similarEle = new Set(arr)
console.log(similarEle)

// logical part
function remSimilar(arr){
  let result = []
  for (let i = 0; i < arr.length; i++){
    arr.forEach((item) => {
      let count = 1
      for (ele of result){
        if (ele == arr[i]){
          count++
        } 
      }
      if (count == 1){
        result.push(arr[i])
      }
    })
  }
  return result
}

console.log(remSimilar(arr))