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
BinarySearchTree.isBST = function(root) {
  /* Returns true if the given tree is a BST and its
   values are >= min and <= max. */
  function isBSTUtil(node, min, max) {
    /* an empty tree is BST */
    if (node == null)
      return 1;

    /* false if this node violates the min/max constraint */
    if (node.value < min || node.value > max)
      return 0;

    /* otherwise check the subtrees recursively,
     tightening the min or max constraint */

    // Allow only distinct values
    return isBSTUtil(node.left, min, (node.value - 1)) && isBSTUtil(node.right, (node.value + 1), max);
  }
  return (isBSTUtil(root, Number.MIN_VALUE, Number.MAX_VALUE));
};


var bst2 = new BinarySearchTree(10);

bst2.add(new BinarySearchTree(20)).add(new BinarySearchTree(30)).add(new BinarySearchTree(5)).add(new BinarySearchTree(8)).add(new BinarySearchTree(3)).add(new BinarySearchTree(9));
console.log('IS BST bst2', (BinarySearchTree.isBST(bst2) ? 'true' : 'false'));

//set up a bst that breaks the rules
var nonBst = new BinarySearchTree(10);
nonBst.left = new BinarySearchTree(20);
console.log('IS BST nonBst', (BinarySearchTree.isBST(nonBst) ? 'true' : 'false'));
