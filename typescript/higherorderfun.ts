function higherOrderFunction(fn: (arg: number) => number): (x: number) => number {
    return function(x: number): number {
      return fn(x) * 2;
    };
  }
  
  function addOne(x: number): number {
    return x + 1;
  }
  
  const newFunction = higherOrderFunction(addOne);
  console.log(newFunction(5)); // Output: 12 ( (5+1) * 2 )
  