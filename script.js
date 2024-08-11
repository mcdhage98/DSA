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

n6.setLeft(n12);
n6.setRight(n13);

function widthOfBinaryTree(root) {
  debugger;
  if (!root) {
    return 0;
  }
  let ans = 0;
  let q = [];
  q.push({ node: root, position: 0 });
  while (q.length) {
    let size = q.length;
    let mmin = q[0].position;
    let leftIndex, rightIndex;
    for (i = 0; i < size; i++) {
      let curIndex = q[0].position - mmin;
      if (i == 0) {
        leftIndex = q[0].position;
      }
      if (i == size - 1) {
        rightIndex = q[0].position;
      }
      let popped = q.shift();
      if (popped?.node?.left) {
        q.push({ node: popped?.node?.left, position: curIndex * 2 + 1 });
      }
      if (popped?.node?.right) {
        q.push({ node: popped?.node?.right, position: curIndex * 2 + 2 });
      }
    }
    let width = rightIndex - leftIndex + 1;
    ans = Math.max(ans, width);
  }
  return ans;
}
let maxWidth = widthOfBinaryTree(n1);

console.log("Maximum width of the binary tree is: " + maxWidth);
