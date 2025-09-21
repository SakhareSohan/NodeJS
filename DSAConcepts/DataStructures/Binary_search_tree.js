// Binary Search tree
class Node{
    constructor(data){
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree{
    constructor(){
      this.root = null;
    }
    add(data){
      let temp = this.root;
      if (temp == null){
        this.root = new Node(data);
      } else {
        
        //left jayega yah right
        let node = new Node(data);
        let temp = this.root;
        while (temp != null){
          if (data < temp.data){
            if (temp.left == null){
              temp.left = node;
              break;
            } else {
              temp = temp.left;
            }
          } else {
            if (temp.right == null){
              temp.right = node;
              break;
            } else {
              temp = temp.right;
            }
          }
        }
      }
    }
    inorder(node){
      if (node != null){
        this.inorder(node.left);
        console.log(node.data);
        this.inorder(node.right);
      }
    }
  }
  let bst = new BinarySearchTree();
  bst.add(10);
  bst.add(5);
  bst.add(15);
  bst.add(3);
  bst.add(7);
  bst.inorder(bst.root);