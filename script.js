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


function parentTrackFunction(parentTrack, root) {
  let q = [];
  q.push(root);
  while (q.length) {
    let size = q.length;
    for (let i = 0; i < size; i++) {
      let current = q.shift();
      if (current?.left) {
        parentTrack.set(current?.left, current);
        q.push(current.left);
      }
      if (current?.right) {
        parentTrack.set(current?.right, current);
        q.push(current.right);
      }
    }
  }
}

function Solution(root, target, k) {
  if (!root) {
    return;
  }
  let parentTrack = new Map();
  let visited = new Map();
  parentTrackFunction(parentTrack, root);
  let level = 0;
  let q = [];
  q.push(target);
  visited.set(target, true);
  while (q.length) {
    if (level++ == k) {
      break;
    }
    let size = q.length;
    for (let i = 0; i < size; i++) {
      let cur = q.shift();
      if (cur?.left && !visited.get(cur?.left)) {
        q.push(cur.left);
        visited.set(cur.left, true);
      }
      if (cur?.right && !visited.get(cur?.right)) {
        q.push(cur.right);
        visited.set(cur.right, true);
      }

      if (parentTrack.get(cur) && !visited.get(parentTrack.get(cur))) {
        q.push(parentTrack.get(cur));
        visited.set(parentTrack.get(cur), true);
      }
    }
  }
  console.log("ans", q);
}

let root = n1;
let target = n5;
let k = 2;
Solution(root, target, k);
