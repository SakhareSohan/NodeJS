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
  
//functions with a simple code to find area of a circle

//anonomous function
let area = function(radius){
  return Math.PI * radius * radius;
}(10);
console.log(area);

//named function
function area_fun(radius){
  return Math.PI * radius * radius;
};
console.log(area_fun(100));

//arrow function
area = ((radius) => {
  return Math.PI * radius * radius;
})(1000);
console.log(area);


console.log(add(a, b));
console.log(product(a, b));
console.log(divide(a, b));