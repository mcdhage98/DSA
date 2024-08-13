//https://takeuforward.org/binary-tree/print-nodes-at-distance-k-in-a-binary-tree/
// tc o(n) sc o(n)
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

function parentTrackerFn(root, start, parentTracker) {
  let q = [];
  q.push(root);
  let startNode;
  while (q.length) {
    let size = q.length;
    for (let i = 0; i < size; i++) {
      let cur = q.shift();
      if (cur?.value == start) {
        startNode = cur;
      }
      if (cur?.left) {
        parentTracker.set(cur?.left, cur);
        q.push(cur.left);
      }
      if (cur?.right) {
        parentTracker.set(cur?.right, cur);
        q.push(cur.right);
      }
    }
  }
  return startNode;
}

function Solution(root, start) {
  if (!root) {
    return 0;
  }
  let parentTracker = new Map();
  let startNode = parentTrackerFn(root, start, parentTracker);
  let time = 0;
  let q = [];
  q.push(startNode);
  let visited = new Map();
  visited.set(startNode, true);
  while (q.length) {
    let size = q.length;
    let burnt = false;
    for (let i = 0; i < size; i++) {
      let cur = q.shift();
      if (cur?.left && !visited.get(cur?.left)) {
        burnt = true;
        visited.set(cur.left, true);
        q.push(cur.left);
      }
      if (cur?.right && !visited.get(cur?.right)) {
        burnt = true;
        visited.set(cur.right, true);
        q.push(cur.right);
      }
      if (parentTracker.get(cur) && !visited.get(parentTracker.get(cur))) {
        burnt = true;
        visited.set(parentTracker.get(cur));
        q.push(parentTracker.get(cur));
      }
    }
    if (burnt) {
      time++;
    }
  }
  return time;
}

let root = n1;
let start = 3;
console.log(Solution(root, start));
