'use strict';

function Tree(val) {
  this.value = val;
  this.children = [];
}

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

a.indent();
