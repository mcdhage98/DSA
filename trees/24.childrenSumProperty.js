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
  
  let n1 = new Node(0);
  let n2 = new Node(20);
  let n3 = new Node(300);
  let n4 = new Node(40);
  let n5 = new Node(500);
  let n6 = new Node(600);
  let n7 = new Node(70);
  let n8 = new Node(8);
  let n9 = new Node(90);
  let n10 = new Node(1000);
  let n11 = new Node(110);
  let n12 = new Node(1200);
  let n13 = new Node(130);
  
  n1.setLeft(n2);
  n1.setRight(n3);
  
  n2.setLeft(n4);
  n2.setRight(n5);
  
  n3.setLeft(n6);
  n3.setRight(n7);
  
  n4.setLeft(n8);
  n4.setRight(n9);
  
  n5.setLeft(n10);
  n5.setRight(n11);
  
  n6.setLeft(n12);
  n6.setRight(n13);
  
  function printArray(arr) {
    // Iterate through the
    // array and print each element
    for (let num of arr) {
      console.log(num + " ");
    }
    console.log("\n");
  }
  




  
  function childrenSumProperty(root) {
    if (!root) {
      return;
    }
    if (root?.left && root?.left?.value < root?.value) {
      root.left.value = root?.value;
    }
    if (root?.right && root?.right?.value < root?.value) {
      root.right.value = root?.value;
    }
    childrenSumProperty(root?.left);
    childrenSumProperty(root?.right);
  
    if (
      root?.left?.value &&
      root?.right?.value &&
      root?.left?.value + root?.right?.value > root?.value
    ) {
      root.value = root?.left?.value + root?.right?.value;
    }
  }
  
  function solution(root) {
    if (root?.value == null) {
      return;
    }
    let q = [];
    q.push(root);
    let ans = [];
    while (q.length > 0) {
      let level = [];
      let size = q.length;
  
      for (let i = 0; i < size; i++) {
        let el = q.shift();
        level.push(el.value);
        if (el?.left) {
          q.push(el.left);
        }
        if (el?.right) {
          q.push(el.right);
        }
      }
      ans.push(level);
    }
    return ans;
  }
  
  childrenSumProperty(n1);
  let ans = solution(n1);
  printArray(ans);
  