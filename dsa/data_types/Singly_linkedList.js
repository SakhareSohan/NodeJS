class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    add(data) {
      let node = new Node(data);
      if (this.head === null) {
        this.head = node;
        return;
      }
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    add_beg(data){
      let node = new Node(data);
      let current = this.head;
      node.next = current;
      this.head = node;
    }
    add_mid(data,pos){ 
      let node = new Node(data);
      let current = this.head;
      while (current.next !== null && current.next.data !== pos){
        current = current.next
      }
      node.next = current.next;
      current.next = node;
    }
    del_mid(data){
      let current = this.head;
      while (current !== null && current.next !== null && current.next.data !== data){
        current = current.next;
      }
      current.next = current.next.next;
    }
    print() {
      let current = this.head;
      while (current != null) {
        console.log(current.data);
        current = current.next;
      }
    }
    rev(){
      let prev = null;
      let current = this.head;
      let next = null;
  
      while (current !== null) {
        next = current.next; 
        current.next = prev;
        prev = current;
        current = next; 
      }
  
      this.head = prev;
    }
  }
  
  let list = new LinkedList();
  list.add(1);
  list.add(2);
  list.add(4);
  list.add_beg(0);
  list.add_mid(3, 4);
  list.print();
  
//   // linked list 
// class Node{
//   constructor(data){
//     this.data = data;
//     this.next = null;
//   }
// }

// class linkedList{
//   constructor(){
//     this.head = null;
//   }
//   prt(){
//     let current = this.head;
//     while(current != null){
//       console.log(current.data);
//       current = current.next;
//     }
//   }
//   add(data){
//     if (this.head == null){
//       this.head = new Node(data);
//     } else{
//       let current = this.head;
//       while(current.next != null){
//         current = current.next;
//       }
//       current.next = new Node(data);
//     }
//   }
//   add_beg(data){
//     let current = this.head;
//     this.head = new Node(data);
//     this.head.next = current;
//   }
//   add_atUniqe(data, target){
//     let current = this.head;
//     while(current.data != target){
//       current = current.next;
//     }
//     let temp = current.next;
//     current.next = new Node(data);
//     current.next.next = temp;
//   }
//   remove_atUnique(target){
//     let current = this.head;
//     while(current.next.data != target){
//       current = current.next;
//     }
//     current.next = current.next.next;
    
//   }
// }

// let list = new linkedList();
// list.add(1);
// list.add(2);
// list.add(3);
// list.add_beg(0);
// list.add_atUniqe(4, 2);
// list.remove_atUnique(4);
// list.prt();