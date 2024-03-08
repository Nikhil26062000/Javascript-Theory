/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
    let count = 0;
    for(let n of nums){
        // we are doing n+diff*2 becz we want number + diff as one one and number + diff + diff as another number which should be  present inside array then we have to increment count
        if(nums.includes(n+diff) && nums.includes(n+diff+diff)) count++
    }
    return count;
};