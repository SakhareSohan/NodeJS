// classes
class abc2{
    name: string;
    classes: any;
    id: number;
    
    constructor(name: string, classes: any, id: number){
      this.name = name;
      this.classes = classes;
      this.id = id;
    }
  
    prt2(): void{
      console.log(`data stored are name ${this.name} classes ${this.classes} id ${this.id}`)
    }
  }
  
  let obj1: abc2 = new abc2('sohan', 'Be4', 59);
  obj1.prt2()