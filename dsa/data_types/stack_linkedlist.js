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