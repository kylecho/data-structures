var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    var size = someInstance.size();
    if(size === 0){
      storage[0] = value;
    } else {
      for(var i = size; i >= 1; i--){
        storage[i] = storage[i-1];
      }
      storage[0] = value;
    }
  };

  someInstance.dequeue = function(){
    var size = someInstance.size();
    var result = storage[size-1];
    delete storage[size - 1];
    return result;
  };

  someInstance.size = function(){
    return Object.keys(storage).length;
  };

  return someInstance;
};

// enqueue(string) - Add a string to the back of the queue
// dequeue() - Remove and return the string at the front of the queue
// size() - Return the number of items in the queue