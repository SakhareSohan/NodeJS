function Fib(n) {
    if (n <= 1) {
      return n;
    } else {
      return Fib(n - 1) + Fib(n - 2);
    }
  }
  
  // driver code
  let n = 9;
  console.log(n + "th Fibonacci Number: " + Fib(n));