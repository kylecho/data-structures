var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;

  _.extend(newTree, treeMethods);
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var parent = this;
  this.children.push(Tree(value));
  this.children[this.children.length - 1].parent = parent;
};

treeMethods.removeFromParent = function() {
  this.parent = null;
}

treeMethods.contains = function(target){
  
  function containsTarget(node){
    if (node.value === target){
      return true;
    } else {
      if (node.children){
        for(var i = 0; i < node.children.length; i++){
          if(containsTarget(node.children[i])){
            return true;
          }
        }
      }
      return false;
    }
  }

  return containsTarget(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 *
 * .addChild === O(1)
 * .contains === O(N)
 */
