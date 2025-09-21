// Normal function 
function abc(): void{
    console.log('abc')
  }
  console.log(typeof abc)
  abc()
  
  // Anonomous function
  let ab: () => void = function(): void {
    console.log('ab');
  }
  console.log(typeof ab)
  ab()

  // Arrow function
  let arrow: (a: number, b: number) => void = (a, b): void => {
    console.log('arrow');
  }
  console.log(typeof arrow);
  arrow(2, 3)
  
  // Arrow function IIFE
  let ba: string = ((): string => {
    let nw: string = 'hello world'
    return nw
  })();
  console.log(typeof ba)
  console.log(ba)
  /*
  function declaration is used as a function with its return data type
  if more specific is needed then we will use arrow functionto define parameter as a function is a functionin ts.
  
  */