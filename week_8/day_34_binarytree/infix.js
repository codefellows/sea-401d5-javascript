'use strict';

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

//find a node with the value of val else return false
BinaryTree.prototype.find = function(val) {
  var findHelper = function(node) {
    if (!node) return false;
    if (val === node.value) {
      return node;
    } else {
      var found = findHelper(node.left);
      if (!found) {
        found = findHelper(node.right);
      }
      return found;
    }
  };
  return findHelper(this);
};

BinaryTree.prototype.add = function(newNode) {
  if (this.left === null) {
    this.left = newNode;
    return true;
  } else if (this.right === null) {
    this.right = newNode;
    return true;
  }
};


BinaryTree.prototype.buildInfix = function() {
  var str = '';

  function infix(node) {
    if (node != null) {
      //console.log('node', node);
      if (['*', '+', '-', '/'].indexOf(node.value) > -1) {
        str += '(';
      }
      infix(node.left);
      str += node.value;
      infix(node.right);
      if (['*', '+', '-', '/'].indexOf(node.value) > -1) {
        str += ')';
      }
    }
  }
  infix(this);
  return str;
};


//load up the tree to create a set of operations with precedence
var root = new BinaryTree('+');
var times = new BinaryTree('*');

root.add(times);
times.add(new BinaryTree('3'));
root.find('*').add(new BinaryTree('4'));
root.add(new BinaryTree('-'));
root.find('-').add(new BinaryTree('10'));
root.find('-').add(new BinaryTree('/'));
root.find('/').add(new BinaryTree('3'));
root.find('/').add(new BinaryTree('2'));
console.log('INFIX:',root.buildInfix());
