// Quicksort time complexity
// Worst case O(n^2)
// Average case 
// Best case O(n * log(n))

function quickSort(array, callback) {
  if (array.length <= 1) return array;
  var pivot = array[0];
  var lower = [];
  var higher = [];

  for (let i = 1; i < array.length; i++) {
    if (callback(array[i], pivot) === -1) {
      lower.push(array[i]);
    } else {
      higher.push(array[i]);
    }
  }

  return quickSort(lower, callback).concat(pivot).concat(quickSort(higher, callback));
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

console.log(quickSort([4, 19, 2, 34, 3, 7, 1, 2, 3, 4], reverseSort));
console.log(quickSort([4, 19, 2, 34, 3, 7, 1, 2, 3, 4], sort));

function quickSort2(array, left, right) {
  left = left || 0;
  right = right || array.length - 1;

  var pivot = getPivot(array, left, right);

  if (left < pivot - 1) quickSort2(array, left, pivot - 1);
  if (right > pivot) quickSort2(array, pivot, right);
  
  return array;
}

function getPivot(array, left, right) {
  var pivot = Math.floor((left + right) / 2);

  while (left <= right) {

    while (array[left] < array[pivot]) {
      left++;
    }

    while (array[right] > array[pivot]) {
      right--;
    }

    if (left <= right) {
      var temp = array[left];
      array[left] = array[right];
      array[right] = temp;
      left++;
      right--;
    }
  }

  return left;
}

console.log(quickSort2([4, 2, 7, 1, 8, 3, 1]));