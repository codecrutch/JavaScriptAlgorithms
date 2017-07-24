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
    if(callback(array[i], pivot) === -1) {
      lower.push(array[i]);
    } else {
      higher.push(array[i]);
    }
  }

  return quickSort(lower, callback).concat(pivot).concat(quickSort(higher, callback));
}

function reverseSort(a,b) {
  if (a < b) return 1;
  if (a > b) return -1;
  return 0;
}

function sort(a,b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

console.log(quickSort([4,19,2,34,3,7,1,2,3,4], reverseSort));
console.log(quickSort([4,19,2,34,3,7,1,2,3,4], sort));

function quickSort2(array, callback) {
  if (array.length <= 1) return array;
  var pivot = array[0];
  var head = 0;
  
  for(var i = 1; i < array.length; i++) {
    if (callback(array[i], pivot) === -1) {
      [array[i], array[head] = array[head], array[i]]
      head++;
    }
  }

  return quickSort2(array)
}