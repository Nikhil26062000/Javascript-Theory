/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let s = new Set(allowed)
    let count = 0
    for(let w of words){
        if(check(w,s)) count++
    }

    function check(w,s) {
        for(char of w){
            if(!s.has(char)){
                return false
            }
        }
        return true
    }
    return count
};