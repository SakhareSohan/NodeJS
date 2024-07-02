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
  
  
  let obj = new abc();
  obj.prt
  obj.data("mango")
  console.log(obj._data) // cant be accessed directly #data cant be accessed but _ is just naming convention
  
