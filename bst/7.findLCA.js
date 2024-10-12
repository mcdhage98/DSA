class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class Solution {
    checkBST(node, min, max) {
      if (node === null) return true;
      if (node.data <= min || node.data >= max) return false;
  
      return (
        this.checkBST(node.left, min, node.data) &&
        this.checkBST(node.right, node.data, max)
      );
    }
  
    isValidBST(root) {
      return this.checkBST(root, -Infinity, Infinity);
    }
  
    findLCA(root, n1, n2) {
      if (!root) {
        return;
      }
      while (root) {
        if (n1 < root.data && n2 < root.data) {
          root = root?.left;
        } else if (n1 > root.data && n2 > root.data) {
          root = root?.right;
        } else if (
          (n1 < root.data && n2 > root?.right) ||
          (n1 > root.data && n2 < root.data)
        ) {
          return root.data;
        } else if (n1 == root.data || n2 == root.data) {
          return root.data;
        }
      }
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
  const ans = ob.isValidBST(root);
  
  if (ans === true) {
    console.log("Valid BST");
  } else {
    console.log("Invalid BST");
  }
  
  console.log(ob.findLCA(root, 15, 9));
  