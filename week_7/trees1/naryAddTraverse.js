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
  //console.log('traverse,', this.value);
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
a.traverse();

//test null
var n = new Tree(null);
n.traverse();
