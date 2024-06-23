/*
finding permutation without using extra space 
TC n! * n
SC n

*/

let arr = [1, 2, 3];
function permutation(arr) {
  let res = [];
  findPermutation(arr, 0, res);
  console.log(res);
}

function findPermutation(arr, ind, res) {
  if (ind == arr?.length - 1) {
    res.push([...arr]);
  }
  for (let i = ind; i < arr?.length; i++) {
    let temp = arr[ind];
    arr[ind] = arr[i];
    arr[i] = temp;
    findPermutation(arr, ind + 1, res);
    temp = arr[ind];
    arr[ind] = arr[i];
    arr[i] = temp;
  }
}

permutation(arr);
