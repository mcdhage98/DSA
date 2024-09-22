// Node class representing a single node in the tree
class Node {
    constructor(value) {
      this.value = value;
      this.left = null; // Left child
      this.right = null; // Right child
    }
  }
  
  // Binary Search Tree class
  class BinarySearchTree {
    constructor() {
      this.root = null; // Initially, the tree is empty
    }
  
    // Insert a new node in the BST
    insert(value) {
      const newNode = new Node(value);
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    // Helper function to insert a node
    insertNode(node, newNode) {
      if (newNode.value < node.value) {
        // Insert in the left subtree
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        // Insert in the right subtree
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
  
    // Inorder traversal: left-root-right (sorted order)
    inorder(node = this.root) {
      if (node !== null) {
        this.inorder(node.left);
        console.log(node.value);
        this.inorder(node.right);
      }
    }
  
    // Preorder traversal: root-left-right
    preorder(node = this.root) {
      if (node !== null) {
        console.log(node.value);
        this.preorder(node.left);
        this.preorder(node.right);
      }
    }
  
    // Postorder traversal: left-right-root
    postorder(node = this.root) {
      if (node !== null) {
        this.postorder(node.left);
        this.postorder(node.right);
        console.log(node.value);
      }
    }
  
    // Find a node with a given value
    ceil(value, node = this.root) {
      let ceil = -1;
      while (node != null) {
        if (value == node.value) {
          ceil = node.value;
          break;
        }
        if (value < node.value) {
          ceil = node.value;
          node = node.left;
        } else if (value > node.value) {
          node = node.right;
        }
      }
      return ceil;
    }
  
    delete(value, node = this.root) {
      if (!node) {
        return;
      }
      if (node.value == value) {
        return this.helper(node);
      }
      let root = node;
      while (node != null) {
        if (value < node.value) {
          if (node.left && node.left.value == value) {
            node.left = this.helper(node.left);
            break;
          } else {
            node = node.left;
          }
        } else {
          if (node.right && node.right.value == value) {
            node.right = helper(node.right);
            break;
          } else {
            node = node.right;
          }
        }
      }
      return root;
    }
  
    helper(root) {
      if (root.left == null) {
        return root.right;
      }
      if (root.right == null) {
        return root.left;
      }
      let leftRightMost = this.findRightMost(root.left);
      leftRightMost.right = root.right;
      return root.left;
    }
  
    findRightMost(root) {
      while (root.right != null) {
        root = root.right;
      }
      return root;
    }
  }
  
  // Example usage:
  const bst = new BinarySearchTree();
  bst.insert(9);
  bst.insert(8);
  bst.insert(12);
  bst.insert(5);
  bst.insert(10);
  bst.insert(13);
  bst.insert(3);
  bst.insert(7);
  bst.insert(11);
  bst.insert(2);
  bst.insert(4);
  bst.insert(6);
  bst.insert(8);
  bst.insert(1);
  
  console.log(bst.inorder());
  console.log("============");
  let root = bst.delete(5);
  console.log(bst.inorder());
  