/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    pointer = 0;
  stream = new Array(n);
};

/** 
* @param {number} idKey 
* @param {string} value
* @return {string[]}
*/
OrderedStream.prototype.insert = function(idKey, value) {
  let result=[]
  stream[idKey-1] = value;
  if(pointer != idKey-1) return [];
  while(stream[pointer]){
      result.push(stream[pointer])
      pointer++
  }
  return result

};

/** 
* Your OrderedStream object will be instantiated and called as such:
* var obj = new OrderedStream(n)
* var param_1 = obj.insert(idKey,value)
*/