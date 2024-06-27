// inheritance
// extends and super
class car{
  constructor(speed){
    this.speed = speed;
    this.safty = 6;
    this.slow = 0;
  }
  break(){
    console.log(`break applier ${this.slow}`)
  }
}
class volvo extends car{
  constructor(color, speed){
    super(speed); // accessing parent property
    this.color = color;
  }
  accident(){
    if (this.speed > 120){
      console.log(`apply break ${this.slow}`);
      this.speed = 100;
      super.break(); // accessing parent method
    }
  }
}
let obj1 = new volvo('black', 121);
obj1.accident();


/////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////


class Car {
    constructor(a) {
      this.a = 100; // this value can be updated using child class
      this.x = 50;
    }
    acc() {
      console.log("Vroom Vroom");
    }
    decc() {
      console.log("Slow Slow");
    }
  }
  
  class Ford extends Car {
    constructor(a) {
      super(a); // Call the parent class constructor
      this.b = 20;
    }
    acc() {
      super.acc(); // Call the parent class method
      console.log("Go Fast");
    }
    model() {
      console.log("Ford Simply Clever");
    }
  }
  
  let obj = new Ford();
  obj.acc(); // Output: "Vroom Vroom" followed by "Go Fast"
  
  console.log(obj.a); // Output: 100
  console.log(obj.b); // Output: 20
  