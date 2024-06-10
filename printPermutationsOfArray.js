/*
let arr = [1,2,3]
[1, 2, 3]

 [1, 3, 2]

[2, 1, 3]

[2, 3, 1]

[3, 1, 2]

[3, 2, 1]

Time Compl n!*n
Space = o(n)+o(n) (carrying map);
*/

let arr = [1, 2, 3];
function permutation(arr) {
  let map = new Array(3).fill(false);
  let res = [];
  findPermutation(arr, [], map, res);
  console.log(res);
}

function findPermutation(arr, ds, map, res) {
  if (ds?.length == arr?.length) {
    res.push([...ds]);
    return;
  }
  for (let i = 0; i < arr?.length; i++) {
    if (!map[i]) {
      ds.push(arr[i]);
      map[i] = true;
      findPermutation(arr, ds, map, res);
      map[i] = false;
      ds.pop();
    }
  }
}

permutation(arr);
