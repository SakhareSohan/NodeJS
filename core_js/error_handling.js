let arr = new Array();
arr.push(1,2,3,4,5,6,7,8,9);

try{
  arr.reduce((a, b) => {
    if (a + b > 10){
      throw new Error('sum is greter than 20');
    } else {
      return a + b;
    } 
  })
} catch(error){
  console.log(error.message);
} finally {
  console.log('COMPLETE...!!!');
}