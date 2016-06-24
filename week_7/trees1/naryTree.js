'use strict';
//a tree is 1 or more nodes
function Tree(val) {
  this.value = val;
  this.children = [];
}


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
