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
  
  function findLowestCommonAncestor(root, p, q) {
    if (!root || root == p || root == q) {
      return root;
    }
    let leftnode = findLowestCommonAncestor(root?.left, p, q);
    let rightnode = findLowestCommonAncestor(root?.right, p, q);
  
    if (leftnode == null) {
      return rightnode;
    }
    if (rightnode == null) {
      return leftnode;
    } else {
      return root;
    }
  }
  
  console.log(findLowestCommonAncestor(n1, n1, n2));
  