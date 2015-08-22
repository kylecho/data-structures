  

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  this.nodes = [];
  this.edges = [];

};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  this.nodes.push(node);
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  return this.nodes.indexOf(node) !== -1 ? true : false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  var index = this.nodes.indexOf(node);
  this.nodes.splice(index, 1);
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  var result = false;
  if(this.edges.length === 0){
    result = false;
  } else { 
    _.each(this.edges, function(edge){
      if (edge.indexOf(fromNode) !== -1 && edge.indexOf(toNode) !== -1) {
        result = true;
      }
    });
  }
  return result;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  this.edges.push([fromNode, toNode]);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  var index = _.indexOf(this.edges, [fromNode, toNode]) || _.indexOf(this.edges, [toNode, fromNode]);
  this.edges.splice(index, 1);
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  return _.map(this.nodes, function(node){
    return cb(node);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * .addNode === O(1)
 * .contains === O(N)
 * .removeNode === O(N)
 * .hasEdge === O(N)
 * .addEdge === O(1)
 * .removeEdge === O(N)
 * .forEachNode === O(N)
 */
