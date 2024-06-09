console.log("hi");
/*
let arr = [1, 1, 1, 2, 2, 3, 1, 5, 6];
arr.sort();
let target = 3;
the result should be lexicographically valid

res = [
  [1,1,1],[1,2],[3]
]
*/

let arr = [1, 1, 1, 2, 2, 3, 1, 5, 6];
arr.sort();
let target = 3;

function combinationSum(arr, target) {
  let result = [];
  findCombination(arr, 0, target, [], result);
  console.log(result);
}

function findCombination(arr, ind, target, ds, result) {
  if (target == 0) {
    result.push([...ds]);
    return result;
  }

  for (let i = ind; i < arr?.length; i++) {
    if (i > ind && arr[i] == arr[i - 1]) {
      continue;
    }
    if (arr[i] > target) {
      break;
    }
    ds.push(arr[i]);
    findCombination(arr, i + 1, target - arr[i], ds, result);
    ds.pop();
  }
}

console.log(combinationSum(arr, target));
