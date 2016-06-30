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
BinaryTree.prototype.traverse = function() {
  this.left && this.left.traverse();
  console.log(this.value);
  this.right && this.right.traverse();
};

BinaryTree.prototype.traverse1 = function(){
  var str = '';
  this.left && (str += this.left.traverse1());
  str += this.value;
  this.right && (str += this.right.traverse1());
  return str;
};

BinaryTree.prototype.traverse2 = function(){
  var acc = [];
  this.left && (acc.push(this.left.traverse2()));
  acc.push(this.value);
  this.right && (acc.push(this.right.traverse2()));

  return acc;
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
//root.traverse();
console.log('accumulate arrary',JSON.stringify(root.traverse2()));
//console.log(JSON.stringify(root));
//console.log('In Order:',root.inOrder());
//console.log(JSON.stringify(root.traverse1()));
