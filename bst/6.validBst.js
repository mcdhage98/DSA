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
