function reverseString(str: string): string {
    let n: number = str.length;
    let result: string = '';
    
    for (let i: number = n - 1; i >= 0; i--) {
      result += str[i];  // Use the += operator to concatenate each character
    }
    
    return result;
  }
  
  let aba: string = "hello";
  console.log(reverseString(aba));  // Output should be "olleh"
  