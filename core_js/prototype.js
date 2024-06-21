//Prototype
class car {
    constructor() {
       let car = "wah kya car hai";
       let color = "kala";
       console.log(car, color)
     }
   }
   
   let bmw = new car();
   console.log(bmw.car);
   
   //Prototype add methods in class
   car.prototype.details = function () {
     console.log(this.car, this.color);
   };
   
   console.log(bmw.details());

//    //Prototype
// let arr = new Array();
// Array.prototype.moti = function (arr){
//   let sum = 0;
//   for (i of this){
//     sum = sum + i;
//   }
//   return sum
// }

// arr = [1,2,3,4,5]
// let newarr = arr.moti(arr)
// console.log(newarr)
