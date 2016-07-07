'use strict';


function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}


BinarySearchTree.addSorted = function(arr) {
  function createBalancedBinaryTree(arr, start, end) {

    if (start > end)
      return null;

    // var mid = (start + end)/2; //avoid for overflow
    var mid = start + (end - start) / 2;
    var root = new BinarySearchTree(arr[mid]);
    root.left = createBalancedBinaryTree(arr, start, mid - 1);
    root.right = createBalancedBinaryTree(arr, mid + 1, end);
    return root;
  }

  return createBalancedBinaryTree(arr, 0, arr.length-1);
};


BinarySearchTree.prototype.indent = function() {
  function indentHelper(node, indent) {
    if (!node) return; //base
    console.log(indent + node.value); //location of operation
    indentHelper(node.left, indent + ' ');
    indentHelper(node.right, indent + ' ');
  }
  indentHelper(this, ' ');
  return '---------';
};




var arr = [1, 2, 3, 4, 5, 6, 7];
var bst7 = BinarySearchTree.addSorted(arr);
console.log(bst7)
console.log(bst7.indent());
