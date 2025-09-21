const person = {
    name: "Sohan",
    age: 22,
    greet: function () {
      console.log(`Hello, my name is ${this.name} ${this.surname}`);
    },
  };
  
  person.surname = "Sakhare";
  console.log(person);
  person.greet();
  
  const person2 = new Object(); // initiating object
  person2.name = 'name'