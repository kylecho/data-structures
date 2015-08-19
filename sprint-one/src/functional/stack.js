var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    var counter = 0;
    for (var key in storage) {
      counter++;
    }
    storage[counter] = value;
  };

  someInstance.pop = function(){
    var counter = 0;
    for (var key in storage) {
      counter++;
    }
    var result = storage[counter - 1];
    delete storage[counter - 1];
    return result;
  };

  someInstance.size = function(){
    var counter = 0;
    for (var key in storage) {
      counter++;
    }
    return counter;
  };

  return someInstance;
};

// push(string) - Add a string to the top of the stack
// pop() - Remove and return the string on the top of the stack
// size() - Return the number of items on the stack
