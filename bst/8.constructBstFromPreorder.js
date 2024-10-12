class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class Solution {
    bstFromPreorderSoln(A) {
      let obj = {
        i: 0,
      };
      return this.bstFromPreorder(A, Number.MAX_SAFE_INTEGER, obj);
    }
  
    bstFromPreorder(A, bound, obj) {
      console.log("i", obj.i);
      console.log("A[i]", A[obj.i]);
      console.log("bound", bound);
  
      if (obj.i == A.length || A[obj.i] > bound) return null;
      let root = new Node(A[obj.i++]);
      root.left = this.bstFromPreorder(A, root.data, obj);
      root.right = this.bstFromPreorder(A, bound, obj);
      console.log("root", JSON.parse(JSON.stringify(root)));
      return root;
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
  
  let n = ob.bstFromPreorderSoln([7, 5, 3, 6, 10, 9, 15]);
  ob.preorder(n);