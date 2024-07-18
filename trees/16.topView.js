
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
  
  function topView(root) {
    let res = new Map();
    if (!root?.value) {
      return [];
    }
    let q = [];
    if (root?.value) {
      q.push([root, 0]);
    }
    while (q.length) {
      let el = q.shift();
      let [node, vertical] = el;
      if (!res.has(vertical)) {
        res.set(vertical, node?.value);
      }
      if (node?.left) {
        q.push([node?.left, vertical - 1]);
      }
      if (node?.right) {
        q.push([node?.right, vertical + 1]);
      }
    }
    let keys = [...res.keys()].sort((a, b) => a - b);
    let ans = [];
    for (let key of keys) {
      ans.push(res.get(key));
    }
  
    return ans;
  }
  
  console.log(topView(n1));
  