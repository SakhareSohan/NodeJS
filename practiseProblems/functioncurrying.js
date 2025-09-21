// function currying
// nested functions

function a(a){
    console.log(a)
    return function b(b){
      console.log(b)
      return function c(c){
        console.log(c)
        return a*b*c;
      }
    }
  }
  
  let obj = a(1)(2)(3)
  console.log(obj)