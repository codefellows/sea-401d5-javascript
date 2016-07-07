'use strict';


function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}


BinarySearchTree.prototype.add = function(node) {
  this.insert(node, this);
  return this;
};

BinarySearchTree.prototype.insert = function(node) {
  var currentNode;
  var inserted = false;

  currentNode = this;
  while (!inserted) {
    if (node.value < currentNode.value) {
      if (currentNode.left === null) {
        currentNode.left = node;
        inserted = true;
        break;
      } else {
        currentNode = currentNode.left;
      }
    } else if (node.value > currentNode.value) {
      if (currentNode.right === null) {
        currentNode.right = node;
        inserted = true;
        break;
      } else {
        currentNode = currentNode.right;
      }
    } else {
      break;
    }

  }
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




var bst2 = new BinarySearchTree(10);

bst2.add(new BinarySearchTree(20)).add(new BinarySearchTree(30)).add(new BinarySearchTree(5)).add(new BinarySearchTree(8)).add(new BinarySearchTree(3)).add(new BinarySearchTree(9));
console.log(bst2);
console.log(bst2.indent());
