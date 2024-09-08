// TreeNode structure
class TreeNode {
    constructor(x) {
      this.val = x;
      this.left = null;
      this.right = null;
    }
  }
  
  class Solution {
    // Function to perform iterative Morris
    // inorder traversal of a binary tree
    getInorder(root) {
      let inorder = [];
      if (!root) {
        return inorder;
      }
      let cur = root;
      while (cur != null) {
        if (!cur?.left) {
          inorder.push(cur.val);
          cur = cur?.right;
        } else {
          let prev = cur?.left;
          while (prev?.right && prev?.right != cur) {
            prev = prev?.right;
          }
          if (!prev?.right) {
            prev.right = cur;
            cur = cur?.left;
          } else {
            prev.right = null;
            inorder.push(cur.val);
            cur = cur?.right;
          }
        }
      }
      return inorder;
    }
    getPreOrder(root) {
      let preorder = [];
      if (!root) {
        return preorder;
      }
      let cur = root;
      while (cur != null) {
        if (!cur?.left) {
          preorder.push(cur.val);
          cur = cur?.right;
        } else {
          let prev = cur?.left;
          while (prev?.right && prev?.right != cur) {
            prev = prev?.right;
          }
          if (!prev?.right) {
            prev.right = cur;
            preorder.push(cur.val);
            cur = cur?.left;
          } else {
            prev.right = null;
            //preorder.push(cur.val);
            cur = cur?.right;
          }
        }
      }
      return preorder;
    }
  }
  
  // Main function
  function main() {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.left.right.right = new TreeNode(6);
  
    const sol = new Solution();
  
    const inorder = sol.getInorder(root);
    const preorder = sol.getPreOrder(root);
  
    console.log("Binary Tree Morris Inorder Traversal: " + inorder.join(" "));
    console.log("Binary Tree Morris Preorder Traversal: " + preorder.join(" "));
  }
  
  // Run the main function
  main();
  