// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// var sumIndicesWithKSetBits = function(nums, k) {

//     let res = 0;

//    for (let i = 0; i < nums.length; i++) {
//        let current = i;
//        let count = 0;

//        while (current > 0) {
//            if (current % 2 !== 0) {
//                count += 1;
//            }
//            current = Math.floor(current / 2);
//        }

//        if (count === k) {
//            res += nums[i];
//        }
//    }

//    return res;
// };



/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function (nums, k) {

    let res = 0
    for (let i = 0; i < nums.length; i++) {
        let count=0;
        let str = (i).toString(2)// converting number into binary
        str = str.split("");
        for(let j=0;j<str.length;j++){
            if(str[j]==1){
                count++
            }
        }
        if(count==k){
            res+=nums[i]
        }

       
    }
    return res
    
};