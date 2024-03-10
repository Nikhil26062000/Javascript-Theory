/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function(nums, k) {

    let res = 0;

   for (let i = 0; i < nums.length; i++) {
       let current = i;
       let count = 0;

       while (current > 0) {
           if (current % 2 !== 0) {
               count += 1;
           }
           current = Math.floor(current / 2);
       }

       if (count === k) {
           res += nums[i];
       }
   }

   return res;
};