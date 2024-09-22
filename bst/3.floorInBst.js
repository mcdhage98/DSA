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
  
    floor(value, node = this.root) {
      let floor = -1;
      while (node != null) {
        if (value == node.value) {
          floor = value;
          break;
        }
        if (value < node.value) {
          node = node.left;
        } else if (value > node.value) {
          floor = node.value;
          node = node.right;
        }
      }
      return floor;
    }
  }
  
  // Example usage:
  const bst = new BinarySearchTree();
  bst.insert(10);
  bst.insert(5);
  bst.insert(20);
  bst.insert(3);
  bst.insert(7);
  
  console.log(bst.floor(9));
  