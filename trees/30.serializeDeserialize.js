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
  
  function serialize(root) {
    if (!root) {
      return null;
    }
    let q = [];
    q.push(root);
    let res = `${root.value}`;
    while (q.length) {
      let size = q.length;
      for (let i = 0; i < size; i++) {
        let cur = q.shift();
        if (cur?.left && cur?.left?.value) {
          res = `${res},${cur.left.value}`;
          q.push(cur?.left);
        } else {
          res = `${res},#`;
        }
        if (cur?.right && cur?.right?.value) {
          res = `${res},${cur.right.value}`;
          q.push(cur?.right);
        } else {
          res = `${res},#`;
        }
      }
    }
    return res;
  }
  
  function deserialize(str) {
    if (!str && str == "#") {
      return null;
    }
    let s = str.split(",");
    let rootVal = s.shift();
  
    let q = [];
    let root = new Node(parseInt(rootVal));
    q.push(root);
  
    while (q.length) {
      let node = q.shift();
      let leftVal = s.shift();
      if (leftVal != "#") {
        let leftNode = new Node(parseInt(leftVal));
        node.left = leftNode;
        q.push(leftNode);
      }
      let rightVal = s.shift();
      if (rightVal != "#") {
        let rightNode = new Node(parseInt(rightVal));
        node.right = rightNode;
        q.push(rightNode);
      }
    }
    return root;
  }
  
  let string = serialize(n1);
  console.log(string);
  let root = deserialize(string);
  console.log(serialize(root));
  