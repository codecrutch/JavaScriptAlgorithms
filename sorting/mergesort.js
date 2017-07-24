// Recursive mergesort, divide and conquer
// Time Complexity
// Best Case O(n * log(n))
// Average Case 0(n * log(n))
// Worst Case O(n*log(n))

function mergeSort(array, sortCallback) {
  if (array.length === 1) return array;
  var mid = Math.floor(array.length / 2);

  console.log(array.slice(0, mid), array.slice(mid))
  var lowerHalf = mergeSort(array.slice(0, mid), sortCallback);
  var upperHalf = mergeSort(array.slice(mid), sortCallback);
  // console.log(mid, lowerHalf, upperHalf);

  return merge(lowerHalf, upperHalf, sortCallback);
}

// Merge time complexity is linear - O(n)
// O(n + m)

function merge(left, right, sortCallback) {
  var sorted = [];

  while (left.length > 0 && right.length > 0) {
    if (sortCallback(left[0], right[0]) === -1) {
      sorted.push(left.shift());
    } else if (sortCallback(left[0], right[0]) === 1) {
      sorted.push(right.shift());
    } else {
      sorted.push(left.shift());
      sorted.push(right.shift());
    }
  }
  // console.log(sorted, left, right);
  return sorted.concat(left).concat(right);
}

function reverseSort(a, b) {
  if (a < b) return 1;
  if (a > b) return -1;
  return 0;
}

function sort(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

console.log(mergeSort([9, 8, 7, 17, 1, 48, 3, 6, 5, 3, 6, 2, 0, 1], reverseSort));
console.log(mergeSort([9, 8, 7, 17, 1, 48, 3, 6, 5, 3, 6, 2, 0, 1], sort));
// console.log(merge([1,3,5,7], [2,4,6,8]));