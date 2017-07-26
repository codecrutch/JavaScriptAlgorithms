function BinaryTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
  this.left = new BinaryTreeNode(value);
  return this.left;
}

BinaryTreeNode.prototype.insertRight = function(value) {
  this.right = new BinaryTreeNode(value);
  return this.right;
}

// Create Tree       20
//                  /  \
//                 /    \
//                17     23
//               /  \   /  \
//              5   10 19  30 <--- largest
//                         /
//                        25
//                       /  \
//                      24  26 <-- second largest

var head = new BinaryTreeNode(20);
head.insertLeft(17);
head.insertRight(23);

head.left.insertLeft(5);
head.left.insertRight(10);

head.right.insertLeft(19);
head.right.insertRight(30);
head.right.right.insertLeft(25);
head.right.right.left.insertLeft(24);
head.right.right.left.insertRight(26);

// Traversal
function getHighestValue(tree) {
  if (tree.right) {
    return getHighestValue(tree.right);
  } else {
    return tree.value;
  }
}

console.log("Largest:", getHighestValue(head));
// ==> Largest: 30

// Complexity for Unbalanced trees: O(n) time where n is the height of the tree.
// Complexity for Balanced trees: O(n*logn) time where n is the height of the tree.
function getSecondHighestValue(tree, previousValue) {
  previousValue = previousValue || tree.value;

  if (tree.value > previousValue) {
    previousValue = tree.value;
  }

  if (tree.right === null) {
    if (tree.left) {
      return getHighestValue(tree.left);
    } else {
      return previousValue;
    }
  } 

  return getSecondHighestValue(tree.right, previousValue);
}

console.log("Second largest:", getSecondHighestValue(head));
// ==> Second largest: 26

function printTree(node) {
  if (node) {
    printTree(node.left);
    console.log(node.value);
    printTree(node.right);
  }
}

printTree(head); // ==> 5,17,10,20,19,23,24,25,26,30

// module.exports = {
//   BinaryTreeNode: BinaryTreeNode
// }