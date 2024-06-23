/*Given an integer array nums that may contain duplicates, return all possible subsets (the power set).
The solution set must not contain duplicate subsets. Return the solution in any order.
Example 1:
Input: nums = [1,2,2]
Output: [11, [1], [1,21, [1,2,2], [2] , [2, 21]
Example 2:
Input: nums = [0]
Output: [[],[0]]
*/

let nums = [1, 2, 2];

function subset(arr) {
  let res = [];
  findSubset(arr, 0, [], res);
  console.log(res);
}

function findSubset(arr, ind, ds, res) {
  res.push([...ds]);
  console.log("final res ind res", ind, res);
  for (let i = ind; i < arr.length; i++) {
    console.log("for loop ind, i", ind, i);
    if (i != ind && arr[i] == arr[i - 1]) {
      console.log("i ind arr[i] arr[i-1]", i, ind, arr[i], arr[i + 1]);
      continue;
    }
    ds.push(arr[i]);
    console.log("ds.push(arr[i]);", arr[i]);
    console.log("findSubset(ind + 1, ds);", ind + 1, ds);
    findSubset(arr, ind + 1, ds, res);
    let r = ds.pop();
    console.log("popped", r);
  }
}

subset(nums);
