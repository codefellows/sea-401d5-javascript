'use strict';

function Tree(val) {
  this.value = val;
  this.children = [];
}

//a traversal that can run a process on a node
//can only do this in a language with 1st order functions

Tree.prototype.traverseAndProcess = function(process) {

  process(this);

  for (var i = 0; i < this.children.length; i++) {
    this.children[i].traverseAndProcess(process);
  }
};


// get the number of nodes in the tree
Tree.prototype.size = function() {
  var length = 0;
  // var incrementFunction = function(node) {
  //   length++;
  // }
  // this.traverseAndProcess(incrementFunction);
  this.traverseAndProcess(function(node) { // jshint ignore:line
    length++;
  });

  return length;
};

//does a value already exist in the tree?
Tree.prototype.exists = function(val) {
  var exists = false;
  var existsFn = function(node) { //  jshint ignore:line
    console.log('exists', node.value);
    if (node.value === val) return exists = true;

  };
  this.traverseAndProcess(existsFn);
  return exists;
};

Tree.prototype.minMax = function() {
  var minmax = {
    min: Number.MAX_VALUE,
    max: Number.MIN_VALUE
  };
  this.traverseAndProcess(function(node) {
    if (node.value < minmax.min) minmax.min = node.value;
    if (node.value > minmax.max) minmax.max = node.value;
  });
  return minmax;
};

Tree.prototype.toArray = function() {
  var arr = [];
  this.traverseAndProcess(function(node) {
    arr.push(node.value);
  });
  return arr;
};

//Test my tree functions
//var tree = new Tree();
var a = new Tree('a');
var b = new Tree('b');
var c = new Tree('c');
var d = new Tree('d');
var e = new Tree('e');
var q = new Tree('q');
a.children.push(b);
a.children.push(c);

a.children.push(q);
b.children.push(d);
d.children.push(e);


console.log('size of tree:', a.size());

console.log('exists a', a.exists('a'));
console.log('exists b', a.exists('b'));
console.log('exists z', a.exists('z'));

console.log('toArray', a.toArray());

var a1 = new Tree(-1);
var a2 = new Tree(2);
var a3 = new Tree(3);
var a4 = new Tree(4);
var a5 = new Tree(12);
var a6 = new Tree(100);
a1.children.push(a2);
a1.children.push(a3);
a1.children.push(a4);
a2.children.push(a5);
a5.children.push(a6);

var minmax = a1.minMax();
console.log('min', minmax.min, 'max', minmax.max);
