// js doesnt have public, private and protected methods
// they have _(thi is just syntax), #(truely private and cannot be accessed from out side)
class car{
    #price
    constructor(){
      this.#price = 100;
    }
    get price(){
      return console.log(this.#price)
    }
    set value(a){
      this.#price = a;
      console.log(this.#price)
    }
  }
  
  let obj = new car();
  obj.price
  obj.value = 200;