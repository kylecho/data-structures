var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};
  someInstance.storage = {};

  _.extend(someInstance, stackMethods);

  return someInstance;

};

var stackMethods = {
  push : function(value){
    var counter = 0;
    for (var key in this.storage) {
      counter++;
    }
    this.storage[counter] = value;
  },
  pop : function(){
    var counter = 0;
    for (var key in this.storage) {
      counter++;
    }
    var result = this.storage[counter - 1];
    delete this.storage[counter - 1];
    return result;
  },
  size : function(){
    var counter = 0;
    for (var key in this.storage) {
      counter++;
    }
    return counter;
  }
};
