class HashMap{
    constructor(size = 3){
      this.bucket = new Array(size).fill(null).map(() => []);;
      this.size = size;
    }
    hash_fun(data){
      let hash = 0;
      const strData = String(data); // Convert data to string to handle both numbers and strings
      for (let i = 0; i < strData.length; i++) {
        hash = (hash + strData.charCodeAt(i) * i) % this.size;
      }
      return hash;
    }
    set(key, data){
      let index = this.hash_fun(key);
      this.bucket[index].push([key, data]);
    }
    prt(){
      console.log(this.bucket);
    }
  }
  const hash = new HashMap();
  hash.set("name", "John");
  hash.set("age", 30);
  hash.set("city", "New York");
  hash.prt()