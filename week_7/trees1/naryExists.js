'use strict';

function Tree(val) {
  this.value = val;
  this.children = [];
}

//a traversal that can run a process on a node
//can only do this in a language with 1st order functions

Tree.prototype.exists = function(val) {

  var exists = false;

  if (this.value === val) return true;
  for (var i = 0; i < this.children.length; i++) {
    console.log('exists', this.children[i].value);
    exists = this.children[i].exists(val);
    if (exists) return true;
  }

  return  false;
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



//console.log('exists b', a.exists('b'));
console.log('exists z', a.exists('z'));
