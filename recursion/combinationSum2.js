console.log("hi");
/*Find all the sets of numbers for which target 5 can be achieved only once a number can be chosen
let arr = [1,1, 2, 3];
let target = 3;
ans = [[3]];
*/

let arr = [1, 2, 1, 3, 4, 5, 6, 7, 8, 9];
let target = 7;

function combinationSum(arr, target) {
  let result = [];
  findCombination(arr, 0, target, [], result);
  console.log(result);
}

function findCombination(arr, ind, target, ds, result) {
  if (ind == arr?.length - 1) {
    if (target == 0) {
      result.push([...ds]);
      return result;
    }
  }
  if (ind <= arr?.length - 1 && target >= 0) {
    ds.push(arr[ind]);
    findCombination(arr, ind + 1, target - arr[ind], ds, result);
    ds.pop();
    findCombination(arr, ind + 1, target, ds, result);
  }
}

console.log(combinationSum(arr, target));
