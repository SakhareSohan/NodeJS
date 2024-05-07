class employee {
    constructor(name, salary, attendance) {
      this.name = name;
      this.salary = salary;
      this.attendance = attendance;
    }
    pay() {
      console.log(this.name + "is the Employee");
      let pay = this.salary * this.attendance;
      console.log(pay + " is the payment");
    }
  }
  
  let arr = [1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1];
  
  function attendance(arr) {
    let sum = arr.reduce((total, current) => current + total, 0);
    console.log(sum);
    return sum / arr.length;
  }
  
  let obj = new employee("Rahul", 20000, attendance(arr));
  obj.pay();
  