function reverseString1(str: string): string {
    let n: number = str.length;
    let result: string = '';
    
    for (let i: number = n - 1; i >= 0; i--) {
      result += str[i];  // Use the += operator to concatenate each character
    }
    
    return result;
  }
  
  let abaa: string = "hello";
  console.log(reverseString1(abaa));  // Output should be "olleh"
  