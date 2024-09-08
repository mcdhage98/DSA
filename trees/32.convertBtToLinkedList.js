class node {
    constructor(val) {
      this.val = val;
      this.right = null;
      this.left = null;
    }
    seRight(n) {
      this.right = n;
    }
    seLeft(n) {
      this.left = n;
    }
  }
  
  let n1 = new node(1);
  let n2 = new node(2);
  let n3 = new node(3);
  let n4 = new node(4);
  let n5 = new node(5);
  let n6 = new node(6);
  let n7 = new node(7);
  
  n1.seLeft(n2);
  n1.seRight(n5);
  
  n2.seLeft(n3);
  n2.seRight(n4);
  
  n5.seRight(n6);
  n6.seLeft(n7);
  
  function print(root) {
    while (root?.val) {
      console.log(root?.val);
      root = root?.right;
    }
  }
  
  /*
  function approcchRecursion(root) {
    if (!root) {
      return null;
    }
    approcchRecursion(root?.right);
    approcchRecursion(root?.left);
    root.left = null;
    root.right = prev;
    prev = root;
  }
  
  let prev = null;
  let root = n1;
  approcchRecursion(root);
  print(n1);
  */
  
  /*
  function appraochStack(root) {
    debugger;
    let stack = [];
    stack.push(root);
    while (stack.length) {
      let cur = stack.pop();
      if (cur?.right) {
        stack.push(cur?.right);
      }
      if (cur?.left) {
        stack.push(cur?.left);
      }
      if (cur) {
        cur.left = null;
        cur.right = stack[stack.length - 1];
      }
    }
  }
  
  appraochStack(n1);
  print(n1);
  */
  
  function approachMorris(root) {
    if (!root) {
      return;
    }
    let cur = root;
    while (cur) {
      if (cur?.left) {
        let prev = cur?.left;
        while (prev?.right) {
          prev = prev.right;
        }
        prev.right = cur?.right;
        cur.right = cur?.left;
        cur.left = null;
      }
      cur = cur?.right;
    }
  }
  approachMorris(n1);
  print(n1);
  