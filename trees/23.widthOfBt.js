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
  // If the root is null, the width is zero
  if (!root) {
    return 0;
  }

  // Initialize a variable 'ans' to store the maximum width
  let ans = 0;

  // Create a queue to perform level-order traversal,
  // where each element is a pair of TreeNode and its position in the level
  let q = [{ node: root, position: 0 }];

  // Perform level-order traversal
  while (q.length > 0) {
    // Get the number of nodes at the current level
    let size = q.length;
    // Get the position of the front node in the current level
    let mmin = q[0].position;

    // Store the first and last positions of nodes in the current level
    let first, last;

    // Process each node in the current level
    for (let i = 0; i < size; i++) {
      // Calculate current position relative to the minimum position in the level
      let cur_id = q[0].position - mmin;
      // Get the current node
      let node = q[0].node;
      // Dequeue the front node from the queue
      q.shift();

      // If this is the first node in the level, update the 'first' variable
      if (i === 0) {
        first = cur_id;
      }

      // If this is the last node in the level, update the 'last' variable
      if (i === size - 1) {
        last = cur_id;
      }

      // Enqueue the left child of the current node with its position
      if (node.left) {
        q.push({ node: node.left, position: cur_id * 2 + 1 });
      }

      // Enqueue the right child of the current node with its position
      if (node.right) {
        q.push({ node: node.right, position: cur_id * 2 + 2 });
      }
    }

    // Update the maximum width by calculating the difference between
    // the first and last positions, and adding 1
    ans = Math.max(ans, last - first + 1);
  }

  // Return the maximum width of the binary tree
  return ans;
}

let maxWidth = widthOfBinaryTree(n1);

console.log("Maximum width of the binary tree is: " + maxWidth);
