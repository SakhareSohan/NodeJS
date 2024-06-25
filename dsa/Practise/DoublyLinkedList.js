class node{
    constructor(data){
      this.next = null;
      this.prev = null;
      this.data = data;
    }
  }
  class doublyLinkedlist{
    constructor(){
      this.head = null;
    }
    append(data){
      if (this.head == null){
        this.head = new node(data);
      } else {
        let current = this.head;
        while (current.next != null){
          current = current.next;
        }
        let newnode = new node(data);
        newnode.prev = current;
        current.next = newnode;
      }
    }
    prepend(data){
      let newnode = new node(data);
      newnode.next = this.head;
      this.head = newnode;
    }
    delete(data) {
        if (this.head === null) {
            throw new Error("List is empty");
        }
  
        let current = this.head;
        while (current !== null && current.data !== data) {
            current = current.next;
        }
  
        if (current === null) {
            throw new Error("Node not found");
        }
  
        if (current.prev !== null) {
            current.prev.next = current.next;
        } else {
            this.head = current.next;
        }
  
        if (current.next !== null) {
            current.next.prev = current.prev;
        }
    }
    find(data){
      let current = this.head;
      while (current.data !== data){
        current = current.next;
      }
      if (current == null){
        return null;
      } else {
        console.log(current.data);
      }
    }
    printList(){
      let current = this.head;
      while (current !== null){
        console.log(current.data);
        current = current.next;
      }
    }
    reverse() {
        let current = this.head;
        let prev = null;
        while (current !== null) {
            let next = current.next;
            current.next = prev;
            current.prev = next;
            prev = current;
            current = next;
        }
        this.head = prev;
    }
  }
  
  let list = new doublyLinkedlist();
  list.append(1);
  list.append(2);
  list.append(3);
  list.append(4);
  list.prepend(0);
  list.find(4);
  list.delete(4);
  list.printList();
  