// Circular linked list
// Head remian the first block from where we can traverse clock wise or anticlockwise
//current.net = this.head which will give us the end and start of the list
// do...while loop to print the end of the list

class node{
    constructor(data){
      this.data = data;
      this.next = null;
    }
  }
  class doublyLinkedList{
    constructor(){
      this.head = null;
    }
    add(data){
      if (this.head == null){
        this.head = new node(data);
        this.head.next = this.head;
      } else {
        let current = this.head;
        while(current.next != this.head){
          current = current.next;
        }
        let node1 = new node(data);
        current.next = node1;
        node1.next = this.head;
      }
    }
    prt(){
      let current = this.head;
      do{
        console.log(current.data);
        current = current.next;
      } while (current != this.head)
    }
  }
  let list = new doublyLinkedList();
  list.add(1);
  list.add(2);
  list.add(3);
  list.prt();