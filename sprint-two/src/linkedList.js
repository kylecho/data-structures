var LinkedList = function(){
  var list = {};
  list.head = null; // unique property
  list.tail = null; // unique property

  list.addToTail = function(value){
    if (list.head === null) { 
      list.head = Node(value);
      list.tail = list.head;
    } else {
      list.tail.next = Node(value);
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function(){
    var currentHead = list.head.value;
    list.head = list.head.next;
    return currentHead;
  };

  list.contains = function(target){
    for(var node = list.head; node; node = node.next) {
      if(node.value === target){
        return true;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
