'use strict';

function Tree(val) {
  this.value = val;
  this.children = [];
}
//n-ary
//traverse and log
Tree.prototype.traverse = function() {

  console.log('traverse,', this.value);

  for (var i = 0; i < this.children.length; i++) {
    this.children[i].traverse();
  }
};


//a traversal with a helper so I can include
//indent to reveal heirarchy
Tree.prototype.indent = function() {

  function indentHelper(node, indent) {
    if (!node) return; //base
    console.log(indent + node.value); //location of operation
    for (var i = 0; i < node.children.length; i++) {
      indentHelper(node.children[i], indent + ' '); //recur
    }
  }
  indentHelper(this, ' ');
};

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
  this.traverseAndProcess(function(node) { // jshint ignore:line
    length++;
  });

  return length;
};

//does a value already exist in the tree?
Tree.prototype.exists = function(val) {
  var exists = false;
  this.traverseAndProcess(function(node) { // jshint ignore:line
    if (node.value === val) exists = true;
  });
  return exists;
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

console.log(JSON.stringify(a));
a.traverse(a);
a.indent();
console.log('size of tree:', a.size(null, 0));

console.log('exists a', a.exists('a'));
console.log('exists z', a.exists('z'));

var n = new Tree(null);
n.traverse();
