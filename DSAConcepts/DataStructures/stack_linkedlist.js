class Node {
    constructor(data) {
      this.data = data;
      this.next = null; // Use 'next' instead of 'prev' for a stack implementation
    }
  }
  
  class Stack {
    constructor() {
      this.top = null; // Use 'top' to represent the top of the stack
    }
  
    add(data) {
      let newNode = new Node(data); // Create a new node with the provided data
      if (this.top === null) {
        this.top = newNode; // If the stack is empty, set the new node as the top
      } else {
        newNode.next = this.top; // Set the next pointer of the new node to the current top
        this.top = newNode; // Update the top to point to the new node
      }
    }
  
    prt() {
      let current = this.top;
      while (current !== null) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  
  let stack = new Stack();
  stack.add(1);
  stack.add(2);
  stack.add(3);
  stack.prt();

// Stack implementation
// class Node{
//   constructor(data){
//     this.data = data;
//     this.next = null;
//   }
// }
// class Stack{
//   constructor(){
//     this.top = null;
//     this.bottom = null;
//     this.length = 0;
//   }
//   push(data){
//     if (this.top == null){
//       this.top = new Node(data);
//       this.bottom = this.top;
//       this.length++;
//     } else {
//       let temp = this.top;
//       this.top = new Node(data);
//       this.top.next = temp;
//     }
//   }
//   prt(){
//     let temp = this.top;
//     while(temp != null){
//       console.log(temp.data);
//       temp = temp.next;
//     }
//   }
//   pop(){
//     this.top = this.top.next;
//   }
// }
// let stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.pop();
// stack.prt();