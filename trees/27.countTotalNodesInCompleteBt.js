// tc o(logn)square
//sc logn
class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    setLeft(node) {
      this.left = node;
    }
    setRight(node) {
      this.right = node;
    }
  }
  
  let n1 = new Node(1);
  let n2 = new Node(2);
  let n3 = new Node(3);
  let n4 = new Node(4);
  let n5 = new Node(5);
  let n6 = new Node(6);
  let n7 = new Node(7);
  let n8 = new Node(8);
  let n9 = new Node(9);
  let n10 = new Node(10);
  let n11 = new Node(11);
  let n12 = new Node(12);
  let n13 = new Node(13);
  
  n1.setLeft(n2);
  n1.setRight(n3);
  
  n2.setLeft(n4);
  n2.setRight(n5);
  
  n3.setLeft(n6);
  n3.setRight(n7);
  
  n4.setLeft(n8);
  n4.setRight(n9);
  
  n5.setLeft(n10);
  n5.setRight(n11);
  
  function countTotal(root) {
    if (!root) {
      return 0;
    }
    let leftHt = findLeftHeight(root);
    let rightHt = findRightHeight(root);
  
    if (leftHt == rightHt) {
      return Math.pow(2, leftHt) - 1;
    } else return 1 + countTotal(root?.left) + countTotal(root?.right);
  }
  
  function findLeftHeight(root) {
    let ht = 1;
    while (root?.left) {
      root = root?.left;
      ht++;
    }
    return ht;
  }
  
  function findRightHeight(root) {
    let ht = 1;
    while (root?.right) {
      root = root?.right;
      ht++;
    }
    return ht;
  }
  
  console.log(countTotal(n1));
  