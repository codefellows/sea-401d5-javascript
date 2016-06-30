'use strict';

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinaryTree.prototype.findAndProcess = function(val, process) {
  var findHelper = function(node) {
    if (!node) return false;
    if (val === node.value) {
      return process(node);
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

BinaryTree.prototype.min = function() {
  var min = Number.MAX_VALUE;

  function traverse(node) {
    if (!node) return;
    if (typeof node.value === 'string') {
      min = (node.value.charCodeAt(0) < min) ? node.value : min;
    } else {
      min = (node.value < min) ? node.value : min;
    }
    traverse(node.left);
    traverse(node.right);
  }
  traverse(this);
  return min;
};

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



BinaryTree.prototype.indent = function() {
  function indentHelper(node, indent) {
    if (!node) return; //base
    console.log(indent + node.value); //location of operation
    indentHelper(node.left, indent + ' ');
    indentHelper(node.right, indent + ' ');
  }
  indentHelper(this, ' ');
};


BinaryTree.prototype.breadthFirstLTR = function() {
  var node = this;
  var queue = [node];
  var result = [];
  node = queue.shift();
  while (node) {
    result.push(node.value);
    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
    node = queue.shift();
  }
  return result;
};

BinaryTree.prototype.depth = function() {
  var node = this;
  var maxDepth = 0;
  var traverse = function(node, depth) {
    if (!node) return null;
    if (node) {
      maxDepth = depth > maxDepth ? depth : maxDepth;
      traverse(node.left, depth + 1);
      traverse(node.right, depth + 1);
    }
  };
  traverse(node, 0);
  return maxDepth;
};

BinaryTree.prototype.printInfix = function() {
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

BinaryTree.prototype.preOrder = function() {
  var result = [];
  var node = this;
  var traverse = function(node) {
    result.push(node.value);
    node.left && traverse(node.left);
    node.right && traverse(node.right);
  };
  traverse(node);
  return result;
};

var root = new BinaryTree('+');
var times = new BinaryTree('*');

root.add(times);
times.add(new BinaryTree('3'));
root.find('*').add(new BinaryTree('4'));
root.add(new BinaryTree('-'));
root.find('-').add(new BinaryTree('10'));
root.find('-').add(new BinaryTree('/'));
root.find('/').add(new BinaryTree('3'));

root.findAndProcess('/', function(node) {
  node.right = new BinaryTree('2');
});

// console.log(JSON.stringify(root));
// root.indent();
//
// console.log('INFIX', root.printInfix());
// console.log('BREADTH LTR:', JSON.stringify(root.breadthFirstLTR()));
// console.log('Depth of tree from root', root.depth());
//console.log('Pre order: ', root.preOrder());
var root2 = new BinaryTree(1);
root2.add(new BinaryTree(2));
root2.find(2).add(new BinaryTree(3));
root2.find(1).add(new BinaryTree(4));
root2.find(3).add(new BinaryTree(0));
console.log('root2', root2);
console.log('MIN root:', root.min());
console.log('MIN root2:', root2.min());


//
// /*DEPTH FIRST TRAVERSALS*/
//
// /*  preOrder is a type of depth-first traversal that tries
//     togo deeper in the tree before exploring siblings. It
//     returns the shallowest descendants first.
//
//     1) Display the data part of root element (or current element)
//     2) Traverse the left subtree by recursively calling the pre-order function.
//     3) Traverse the right subtree by recursively calling the pre-order function. */
//
// BinarySearchTree.prototype.preOrder = function() {
//   var result = [];
//   var node = this;
//   var traverse = function(node) {
//     result.push(node.value);
//     node.left && traverse(node.left);
//     node.right && traverse(node.right);
//   };
//   traverse(node);
//   return result;
// };
//
// /*  inOrder traversal is a type of depth-first traversal
//     that also tries to go deeper in the tree before exploring siblings.
//     however, it returns the deepest descendents first
//
//     1) Traverse the left subtree by recursively calling the pre-order function.
//     2) Display the data part of root element (or current element)
//     3) Traverse the right subtree by recursively calling the pre-order function. */
//
// BinarySearchTree.prototype.inOrder = function() {
//   var result = [];
//   var node = this;
//   var traverse = function(node) {
//     node.left && traverse(node.left);
//     result.push(node.value);
//     node.right && traverse(node.right);
//   };
//   traverse(node);
//   return result;
// };
//
// /*  postOrder traversal is a type of depth-first traversal
//     that also tries to go deeper in the tree before exploring siblings.
//     however, it returns the deepest descendents first
//
//     1) Traverse the left subtree by recursively calling the pre-order function.
//     2) Display the data part of root element (or current element)
//     3) Traverse the right subtree by recursively calling the pre-order function. */
//
//
// BinarySearchTree.prototype.postOrder = function() {
//   var result = [];
//   var node = this;
//   var traverse = function(node) {
//     node.left && traverse(node.left);
//     node.right && traverse(node.right);
//     result.push(node.value);
//   };
//   traverse(node);
//   return result;
// };
//
// //find the left most node to find the min value of a binary tree;
// BinarySearchTree.prototype.findMin = function() {
//   var node = this;
//   var traverse = function(node) {
//     return !node.left ? node.value : traverse(node.left);
//   };
//   return traverse(node);
// };
//
// //find the right most node to find the max value of a binary tree;
// BinarySearchTree.prototype.findMax = function() {
//   var node = this;
//   var traverse = function(node) {
//     return !node.right ? node.value : traverse(node.right);
//   };
//   return traverse(node);
// };
//
//
// BinarySearchTree.prototype.getDepth = function() {
//   var node = this;
//   var maxDepth = 0;
//   var traverse = function(node, depth) {
//     if (!node) return null;
//     if (node) {
//       maxDepth = depth > maxDepth ? depth : maxDepth;
//       traverse(node.left, depth + 1);
//       traverse(node.right, depth + 1);
//     }
//   };
//   traverse(node, 0);
//   return maxDepth;
// };
//
// BinarySearchTree.prototype.countLeaves = function() {
//   var count = 0;
//   var node = this;
//   var traverse = function(node) {
//     if (!node) return null;
//     if (!node.left && !node.right) count++;
//     else traverse(node.left) + traverse(node.right);
//   };
//   traverse(node);
//   return count;
// };
//
// //Can you write me a function that returns all the averages of the nodes
// //at each level (or depth)?? with breadth-first traversal
//
// BinarySearchTree.prototype.nodeAverages = function() {
//   var node = this;
//   var result = {};
//   var depthAverages = [];
//
//   var traverse = function(node, depth) {
//     if (!node) return null;
//     if (node) {
//       if (!result[depth])
//         result[depth] = [node.value];
//       else
//         result[depth].push(node.value);
//     }
//     //check to see if node is a leaf, depth stays the same if it is
//     //otherwise increment depth for possible right and left nodes
//     if (node.right || node.left) {
//       traverse(node.left, depth + 1);
//       traverse(node.right, depth + 1);
//     }
//   };
//   traverse(node, 0);
//
//   //get averages and breadthFirst
//   for (var key in result) {
//     var len = result[key].length;
//     var depthAvg = 0;
//     for (var i = 0; i < len; i++) {
//       depthAvg += result[key][i];
//     }
//     depthAverages.push(Number((depthAvg / len).toFixed(2)));
//   }
//   return depthAverages;
// };
//
// //Convert a binary search tree to a linked-list in place.
// //In-order depth-first traversal.
// function LinkedList() {
//   this.head = null;
// }
//
// BinarySearchTree.prototype.convertToLinkedList = function() {
//
//   var result = [];
//   var node = this;
//   if (!node) return null;
//
//   var traverse = function(node) {
//     node.left && traverse(node.left);
//     result.push(node.value);
//     node.right && traverse(node.right);
//   };
//
//   traverse(node);
//
//   var makeNode = function(value) {
//     var node = {};
//     node.value = value;
//     node.next = null;
//     return node;
//   };
//
//   var list = new LinkedList();
//   list.head = makeNode(result[0]);
//   var current = list.head;
//
//   for (var i = 1; i < result.length; i++) {
//     var currentNode = makeNode(result[i]);
//     current.next = currentNode;
//     current = current.next;
//   }
//   return list;
// };
//
