var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Queue.prototype.enqueue = function(value){
  var size = this.size();
  if(size === 0){
    this.storage[0] = value;
  } else {
    for(var i = size; i >= 1; i--){
      this.storage[i] = this.storage[i-1];
    }
    this.storage[0] = value;
  }
};

Queue.prototype.dequeue = function(){
  var size = this.size();
  var result = this.storage[size-1];
  delete this.storage[size - 1];
  return result;
};

Queue.prototype.size = function(){
  return Object.keys(this.storage).length;
};

