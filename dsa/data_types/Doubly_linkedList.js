// This is similar to linked list only change is that it has 2 pointers that are left and right.
// The head remains the same at the beginning

class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    add(data) {
      let newNode = new Node(data);
      if (this.head == null) {
        this.head = newNode;
      } else {
        let current = this.head;
        // Traverse to the end of the list
        while (current.right != null) {
          current = current.right;
        }
        // Link the new node
        current.right = newNode;
        newNode.left = current;
      }
    }
  
    prt() {
      let current = this.head;
      while (current != null) {
        console.log(current.data);
        current = current.right;
      }
    }
    addAtTarget(tar, data){
        let current = this.head
        while (current.data != tar){
          current = current.right;
        }
        let node1 = new node(data);
        node1.right = current.right;
        current.right = node1;
        node1.left = current; 
    }
  }
  
  // Example usage:
  let list = new LinkedList();
  list.add(1);
  list.add(2);
  list.add(3);
  list.prt(); // Output: 1 2 3
  