// Normal function
function add(a, b){
    return a + b;
  }
  
let a = 10;
let b = 20;

// arrow functions
let product = (a, b) =>{
    return a * b;
  }
  
//anonomus function  
let divide = function(a, b){
    return a / b;
  }
  
console.log(add(a, b));
console.log(product(a, b));
console.log(divide(a, b));