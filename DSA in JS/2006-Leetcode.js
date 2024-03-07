/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
    const frequency = new Map();
  let count = 0;
  
  for (const num of nums) {
      frequency.set(num, (frequency.get(num) || 0) + 1);
      count += (frequency.get(num + k) || 0) + (frequency.get(num - k) || 0);
  }
  
  return count;


};