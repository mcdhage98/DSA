console.log("hi");

let arr = [3, 1, 2, 9, 4, 29, 6, 77, 0, 54, 23];

function mergeSort(arr, low, high) {
  debugger;
  if (low == high) {
    return;
  }
  let mid = Math.floor((low + high) / 2);
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);
  merge(arr, low, mid, high);
}

function merge(arr, low, mid, high) {
  let left = low;
  let right = mid + 1;

  let temp = [];
  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else if (arr[right] <= arr[left]) {
      temp.push(arr[right]);
      right++;
    }
  }
  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }
  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }

  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
}

mergeSort(arr, 0, arr.length - 1);
console.log(arr);
