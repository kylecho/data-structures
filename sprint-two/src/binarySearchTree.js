var BinarySearchTree = function(value){
  var tree = {};
  tree.value = value;
  tree.left = null;
  tree.right = null;
  _.extend(tree, searchTreeMethods);
  return tree;
};

var searchTreeMethods = {};

searchTreeMethods.insert = function(value){
  if (this.value > value) {
    if (this.left === null) { // base case
      this.left = BinarySearchTree(value);
    } else { // recursive case
      this.left.insert(value);
    }
  } else if (this.value < value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  } else {
    return false;
  }
};

searchTreeMethods.contains = function(value){
  // base case
  if (this.value > value) {
    if (this.left === null) {
      return false;
    } else {
      return this.left.contains(value);
    }
  } else if (this.value < value) {
    if (this.right === null) {
      return false;
    } else {
      return this.right.contains(value);
    }
  } else {
    return true;
  }
};

searchTreeMethods.depthFirstLog = function(cb){
  cb(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(cb); 
  }
  if (this.right !== null) {
    this.right.depthFirstLog(cb); 
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 * 
 * .insert === O(N)
 * .contains === O(N^2)
 * .depthFirstLog === O(N^2)
 */
