// static methods can be accessed without creating an object

// static classes
class car{
    constructor(){
      this.data = "data";
      this.a = 100;
     
    }
    static add(x, y){
      console.log(this.data, x+y)  // this wont work as it needs initiation
    }
  }
  let obj = new car();
  // obj.add(30, 49) // this wont work
  car.add(10, 20) 