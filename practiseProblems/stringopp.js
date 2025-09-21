// Your code here.
function countBs(strin){
    let count = 0;
    for (let i = 0; i < strin.length; i++){
      if (strin[i].toLowerCase() == 'b'){
        count += 1;
      }
    }
    return count
  }
  
    function countChar(strin, a){
      let count = 0;
      strin = strin.toLowerCase();
      for (let i = 0; i < strin.length; i++){
        if (strin[i] == a){
          count += 1;
        }
    }
    return count
  }
  console.log(countBs("BOB"));
  // → 2
  console.log(countChar("kakkerlak", "k"));
  // → 4