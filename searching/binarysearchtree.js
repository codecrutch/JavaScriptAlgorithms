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

function getSecondHighestValue(tree, previousValue) {
  previousValue = previousValue || tree.value;
  // debugger
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

function printTree(node) {
  if (node) {
    printTree(node.left);
    console.log(node.value);
    printTree(node.right);
  }
}

printTree(head);
// module.exports = {
//   BinaryTreeNode: BinaryTreeNode
// }