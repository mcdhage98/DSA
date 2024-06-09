let arr = [1, 2, 3];
let res = [];

function subSetSum(arr, index, sum, result) {
  if (index > arr.length - 1) {
    result.push(sum);
  }

  subSetSum(arr, index + 1, sum + arr[index], result);
  subSetSum(arr, index + 1, sum, result);
}

subSetSum(arr, 0, 0, res);
console.log(res);
