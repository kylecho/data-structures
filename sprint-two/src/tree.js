var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

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
