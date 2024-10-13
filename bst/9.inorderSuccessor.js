class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Solution {
  inorderSuccessor(root, p) {
    let succ = null;
    while (root != null) {
      if (p.data >= root.data) {
        root = root.right;
      } else {
        succ = root;
        root = root.left;
      }
    }
    return succ;
  }

  inorderPredecessor(root, p) {
    let pre = null;
    while (root != null) {
      if (p.data <= root.data) {
        root = root.left;
      } else {
        pre = root;
        root = root.right;
      }
    }
    return pre;
  }

  preorder(root) {
    if (!root) {
      return;
    }
    console.log(root.data);
    this.preorder(root.left);
    this.preorder(root.right);
  }
}

// Sample usage
const root = new Node(7);
root.left = new Node(5);
root.left.left = new Node(3);
root.left.right = new Node(6);
root.right = new Node(10);
root.right.left = new Node(9);
root.right.right = new Node(15);

const ob = new Solution();

//console.log(ob.inorderSuccessor(root, root.right));
console.log(ob.inorderPredecessor(root, root.left));
