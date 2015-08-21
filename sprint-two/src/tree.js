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
 */

// A tree class, in functional with shared methods style, with the following properties:
// .children property, an array containing a number of subtrees
// .addChild() method, takes any value, sets that as the target of a node, and adds that node as a child of the tree
// A .contains() method, takes any input and returns a boolean reflecting
//whether it can be found as the value of the target node or any descendant node
// tree.addChild(5);
// tree.addChild(6);
// tree.children[0].addChild(7);
// tree.children[1].addChild(8);
// expect(tree.contains(7)).to.equal(true);
// expect(tree.contains(8)).to.equal(true);

// ver0
// treeMethods.contains = function(target){
//   if (this.value === target){
//     return true;
//   } else {
//     if (this.children.length !== 0) {
//       for (var i = 0; i < this.children.length; i++) {
//         return this.children[i].contains(target);
//       }
//     } else {
//       return false;
//     }
//   }
// };