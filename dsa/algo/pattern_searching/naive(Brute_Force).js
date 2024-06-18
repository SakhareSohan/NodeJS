// Naive (Brute Force) Algo
function NaiveAlgo(text, pat){
    let a = text.length;
    let b = pat.length;
    for (i = 0; i <= a - b; i++){
      let j = 0;
      while (j < b && text[ i+j ] === pat[j]){
        j++;
      }
      if (j === b){
        console.log(i);
      } 
    }
  }
  
  const txt1 = "AABAACAADAABAABA";
  const pat1 = "AABA";
  NaiveAlgo(txt1, pat1);
  