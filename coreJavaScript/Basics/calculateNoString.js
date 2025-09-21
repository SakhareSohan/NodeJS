let a = "123456789abcd";
function sumString(a){
  let sum = 0;
  for (let i of a){
    if(!isNaN(i)){
      sum = sum + Number(i);
    }
  }
  console.log(sum);
}
sumString(a)


