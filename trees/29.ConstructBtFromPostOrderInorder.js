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
  
  function construct(postorder, inorder) {
    let inMap = new Map();
    inorder.forEach((element, index) => {
      inMap.set(element, index);
    });
    let root = constructBt(
      postorder,
      0,
      postorder.length - 1,
      inorder,
      0,
      inorder.length - 1,
      inMap
    );
    return root;
  }
  
  function constructBt(
    postorder,
    postStart,
    postEnd,
    inorder,
    inStart,
    inEnd,
    inMap
  ) {
    if (postStart > postEnd || inStart > inEnd) {
      return;
    }
    let inRoot = inMap.get(postorder[postEnd]);
    let numsLeft = inRoot - inStart;
  
    let root = new Node(postorder[postEnd]);
    root.setLeft(
      constructBt(
        postorder,
        postStart,
        postStart + numsLeft - 1,
        inorder,
        inStart,
        inRoot - 1,
        inMap
      )
    );
  
    root.setRight(
      constructBt(
        postorder,
        postStart + numsLeft,
        postEnd - 1,
        inorder,
        inRoot + 1,
        inEnd,
        inMap
      )
    );
  
    return root;
  }
  
  //let ans = construct([4, 2, 3, 1], [4, 2, 1, 3]);
  let ans = construct([40, 50, 20, 60, 30, 10], [40, 20, 50, 10, 60, 30]);
  postorder(ans);
  
  function postorder(root) {
    if (!root) {
      return;
    }
    postorder(root?.left);
    postorder(root?.right);
    console.log(root.value);
  }
  