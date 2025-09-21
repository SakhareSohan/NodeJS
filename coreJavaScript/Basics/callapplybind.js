// call apply and bind
let person = {
    name: 'abc',
    age: 21,
    greeting: function(){ // cant use arrow function as greeting is called and doesnt have a scope here.
      console.log(`hello my name is ${this.name}`)
    }
  }
  
  person.greeting();
  
  // call - calling object in another object
  let person2 = {
    name: 'xyz',
    age: 23,
    greeting: function(){
        console.log(`hello my name is ${this.name}`)
    }
  }
  
  person.greeting() // will call 1st function
  person.greeting.call(person2); // will call 1st function but object as arg of 2nd function
  
  // apply - applying parameters to object
  
  let person3 = {
      name: 'uvw',
      age: 25,
      greeting: function(place, food){
          console.log(`hello my name is ${this.name}, I was born in ${place} & my favourate food is ${food}`);
      }
    }
  
  // this allows method of obj person3 to get inputs and use person as property
  person3.greeting.apply(person, ['panvel', 'rajma'])
  
  // bind - to bind the data
  let panvelPerson = person3.greeting.bind(person, ['panvel'],['rajma']); // here data is passed seperately
  panvelPerson();