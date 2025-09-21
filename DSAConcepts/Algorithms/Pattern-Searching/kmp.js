function computePiArray(pattern) {
    const pi = new Array(pattern.length).fill(0);
    let k = 0;
  
    for (let i = 1; i < pattern.length; i++) {
      while (k > 0 && pattern[k] !== pattern[i]) {
        k = pi[k - 1];
      }
      if (pattern[k] === pattern[i]) {
        k++;
      }
      pi[i] = k;
    }
  
    return pi;
  }
  
  function kmpSearch(text, pattern) {
    const pi = computePiArray(pattern);
    const result = [];
    let j = 0; // index for pattern
  
    for (let i = 0; i < text.length; i++) {
      while (j > 0 && text[i] !== pattern[j]) {
        j = pi[j - 1];
      }
      if (text[i] === pattern[j]) {
        j++;
      }
      if (j === pattern.length) {
        result.push(i - j + 1);
        j = pi[j - 1];
      }
    }
  
    return result;
  }
  
  // Example usage:
  const text = "AABAACAADAABAABA";
  const pattern = "AABA";
  const result = kmpSearch(text, pattern);
  console.log(result); // Output: [0, 9, 12]
  
  //KMP Algorithm
// pi table creation function
// function surfixFinding(pattern){
//   let length = pattern.length;
//   let i = 1;
//   let len = 0;
//   let lps = new Array(length).fill(0);
//   while (i < length){
//     if (pattern.charAt(i) == pattern.charAt(len)){
//       len++;
//       lps[i] = len;
//       i++;
//     } else {
//       if (len != 0){
//         len = lps[len - 1];
//       } else {
//         lps[i] = 0;
//         i++;
//       }
//     }
//   }
//   console.log(lps);
// }

// surfixFinding("AABAACAABAA");