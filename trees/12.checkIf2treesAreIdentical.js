//do any traversal preorder, post order, inorder of both tress should be same

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
  
  ////second tree
  let p1 = new Node(1);
  let p2 = new Node(2);
  let p3 = new Node(3);
  let p4 = new Node(4);
  let p5 = new Node(5);
  let p6 = new Node(6);
  let p7 = new Node(7);
  let p8 = new Node(8);
  let p9 = new Node(9);
  let p10 = new Node(10);
  let p11 = new Node(11);
  let p12 = new Node(12);
  let p13 = new Node(13);
  
  p1.setLeft(p2);
  p1.setRight(p3);
  
  p2.setLeft(p4);
  p2.setRight(p5);
  
  p3.setLeft(p6);
  p3.setRight(p7);
  
  p4.setLeft(p8);
  p4.setRight(p9);
  
  p5.setLeft(p10);
  p5.setRight(p11);
  
  function check(n, p) {
    if (!n?.value && !p?.value) {
      return n == p;
    } else
      return (
        n?.value == p?.value &&
        check(n?.left, p?.left) &&
        check(n?.right, p?.right)
      );
  }
  
  console.log(check(n1, p1));
  