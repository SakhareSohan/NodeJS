// numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]
// numInStr(["abc", "abc10"]) ➞ ["abc10"]
// numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]
// numInStr(["this is a test", "test1"]) ➞ ["test1"]

let arr = ['test','test2','test0'];
function numb_string(arr){
  let arr2 = []
  for (let i of arr){
    let num = false
    for (let j = 0; j < i.length; j++){
      if (!isNaN(parseInt(i[j]))){
        num = true
      }
    }
    if (num){
      arr2.push(i)
    }
  }
  return arr2;
}
console.log(numb_string(arr))