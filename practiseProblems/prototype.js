class abc{
    static xyz(){
      console.log("xyz");
    }
    uvw(){
      console.log("uvw")
    }
  }
  // abc.xyz()
  let obj = new abc();
  // abc.xyz.call(null);
  Object.prototype.leh = function(){
    abc.xyz();
  }
  
  let s3 = new abc()
  obj.leh()
  s3.leh()
  let a = {};
  a.leh();
  