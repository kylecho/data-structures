var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket;
  var tuple = [k, v];
  if (this._storage.get(i) === undefined) {
    bucket = [tuple];
  } else {
    bucket = this._storage.get(i);
    for (var j = 0; j < bucket.length; j++) {
      if (bucket[j][0] === k) {
        bucket[j][1] = v;
      }
    }
    bucket.push(tuple);
  }
  this._storage.set(i, bucket);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  for (var j = 0; j < bucket.length; j++) {
    if (bucket[j][0] === k) {
      return bucket[j][1];
    }
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  for (var j = 0; j < bucket.length; j++) {
    if (bucket[j][0] === k) {
      bucket[j][1] = null;
    }
  }
  this._storage.set(i, bucket);
};



/*
 * Complexity: What is the time complexity of the above functions?
 *
 * .insert === O(N)
 * .retrieve === O(N)
 * .remove === O(N)
 */
