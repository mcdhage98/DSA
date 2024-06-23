console.log("hi");

let arr = [3, 1, 2, 4, 99, 10, 10, 12, 4, 6];

function quickSort(arr, low, high) {
  debugger;
  if (low < high) {
    let partition = getPartition(arr, low, high);
    quickSort(arr, low, partition - 1);
    quickSort(arr, partition + 1, high);
  }
}

function getPartition(arr, low, high) {
  let pivot = arr[low];
  let i = low;
  let j = high;

  while (i < j) {
    while (arr[i] <= pivot && i < high) {
      i++;
    }
    while (arr[j] >= pivot && j > low) {
      j--;
    }

    if (i < j) {
      let temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
  }
  arr[low] = arr[j];
  arr[j] = pivot;
  return j;
}

quickSort(arr, 0, arr.length - 1);
console.log(arr);
