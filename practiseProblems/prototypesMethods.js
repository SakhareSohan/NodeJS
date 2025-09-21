function a(){
    console.log("a")
    this.b = function b(){
      console.log("b")
    }
    this.c = function c(){
      console.log("c")
    }
  }
  let obj = new a();
  obj.c.call(null)
  a.prototype.d = function(){
    console.log('d');
  }
  a.prototype.d.e = function(){
    console.log('e');
  }

  obj.d()
  obj.d.e()