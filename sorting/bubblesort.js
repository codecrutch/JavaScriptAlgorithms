// Bubble sort time complexity
// Best case 0(n)
// Worst case 0(n^2)

function bubbleSort(array) {
  var newArr = array.slice();
  var sorted = false;
  var pass = 0;
  // optimize by not checking the last place since it will be sorted
  // after every pass

  while (!sorted) {
    sorted = true;
    for (var i = 0; i < newArr.length - 1 - pass; i++) {
      if (newArr[i] > newArr[i + 1]) {
        sorted = false;
        var temp = newArr[i];
        newArr[i] = newArr[i + 1];
        newArr[i + 1] = temp;
      }
    }
    pass++;
  }

  return newArr;
}

console.log(bubbleSort([9, 2, 1, 5, 4, 3]).toString() === [1, 2, 3, 4, 5, 9].toString());


const es6BubbleSort1 = (array) => {
  const newArr = array.slice();
  let swapped;

  do {
    swapped = false;
    for (let i = 1; i < newArr.length; i++) {
      if (newArr[i - 1] > newArr[i]) {
        swapped = true;
        [newArr[i], newArr[i - 1]] = [newArr[i - 1], newArr[i]];
      }
    }
  } while (swapped)

  return newArr;
}

const es6BubbleSort2 = (array) => {
  const newArr = array.slice();
  let sorted = false;
  let pass = 0;

  while(!sorted) {
    sorted = true;
    for (let i = 0; i < newArr.length - pass; i++) {
      if (newArr[i - 1] > newArr[i]) {
        sorted = false;
        [newArr[i], newArr[i - 1]] = [newArr[i - 1], newArr[i]];
      }
    }
    pass++;
  }
  return newArr;
}

console.log(es6BubbleSort1([9, 2, 1, 5, 4, 3]).toString() === [1, 2, 3, 4, 5, 9].toString());
console.log(es6BubbleSort2([9, 2, 1, 5, 4, 3]).toString() === [1, 2, 3, 4, 5, 9].toString());
