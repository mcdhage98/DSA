//boundary traversal tc o(n) sc o(n)
// left traversal + leave nodes + reverse of right traversal

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
  
  function boundaryTraversal(root) {
    debugger;
    let rs = [];
    if (!root?.value) {
      return rs;
    }
    if (root?.value) {
      rs.push(root?.value);
    }
    leftTraversal(root, rs);
    addLeaves(root, rs);
    rightTraversal(root, rs);
  
    console.log(rs);
  }
  
  function isLeaf(node) {
    if (node && !node?.left && !node?.right) {
      return true;
    } else return false;
  }
  function leftTraversal(root, rs) {
    let cur = root?.left;
    while (cur) {
      // If the current node is not a leaf, add its value to the result
      if (!isLeaf(cur)) {
        rs.push(cur.value);
      }
      // Move to the left child if it exists, otherwise move to the right child
      if (cur.left) {
        cur = cur.left;
      } else {
        cur = cur.right;
      }
    }
  }
  
  function addLeaves(root, rs) {
    if (!root?.value) {
      return;
    }
    if (isLeaf(root)) {
      rs.push(root?.value);
    }
    addLeaves(root?.left, rs);
    addLeaves(root?.right, rs);
  }
  
  function rightTraversal(root, rs) {
    let cur = root?.right;
    let temp = [];
    while (cur) {
      // If the current node is not a leaf, add its value to the result
      if (!isLeaf(cur)) {
        temp.push(cur.value);
      }
      // Move to the left child if it exists, otherwise move to the right child
      if (cur?.right) {
        cur = cur.right;
      } else {
        cur = cur?.left;
      }
    }
    rs.push(...temp.reverse());
  }
  
  console.log("sdsd");
  boundaryTraversal(n1);