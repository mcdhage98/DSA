
//tc o(n) sc o(n)
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
  
  function construct(preorder, inorder) {
    let inMap = new Map();
    inorder.forEach((element, ind) => {
      inMap.set(element, ind);
    });
    let root = constructBt(
      preorder,
      0,
      preorder.length - 1,
      inorder,
      0,
      inorder.length - 1,
      inMap
    );
    return root;
  }
  
  function constructBt(
    preorder,
    preStart,
    preEnd,
    inorder,
    inStart,
    inEnd,
    inMap
  ) {
    if (preStart > preEnd || inStart > inEnd) {
      return;
    }
    let inRoot = inMap.get(preorder[preStart]);
    let numsLeft = inRoot - inStart;
  
    let root = new Node(preorder[preStart]);
    root.setLeft(
      constructBt(
        preorder,
        preStart + 1,
        preStart + numsLeft,
        inorder,
        inStart,
        inRoot - 1,
        inMap
      )
    );
    root.setRight(
      constructBt(
        preorder,
        preStart + numsLeft + 1,
        preEnd,
        inorder,
        inRoot + 1,
        inEnd,
        inMap
      )
    );
  
    return root;
  }
  
  let ans = construct([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);
  preorder(ans);
  
  function preorder(root) {
    if (!root) {
      return;
    }
    console.log(root.value);
    preorder(root?.left);
    preorder(root?.right);
  }
  