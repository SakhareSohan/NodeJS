// private can be used using # to specific class (ES6 implementation)
// _ is a way of writting private but wont make it a private property
class abc{
    #data
    constructor(){
      this.#data = "abc" // private data
      this.name = 'xyz' //publicdata
    }
    get prt(){
      return console.log(this.#data)
      
    }
    data(data){
      this.#data = data;
      return console.log(this.#data)
    }
  }
  
  
  // let obj = new abc();
  // obj.prt
  // obj.data("mango")
  // console.log(obj._data) // cant be accessed directly #data cant be accessed but _ is just naming convention

  // class car{
  //   #price
  //   constructor(){
  //     this.#price = 100;
  //   }
  //   get price(){
  //     return console.log(this.#price)
  //   }
  //   set value(a){
  //     this.#price = a;
  //     console.log(this.#price)
  //   }
  // }
  
  // let obj = new car();
  // obj.price
  // obj.value = 200;
  
