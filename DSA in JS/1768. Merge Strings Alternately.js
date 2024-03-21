/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let str=""
    let n = Math.max(word1.length,word2.length)
    for(let i=0;i<n;i++){
        if(i<word1.length){
              str+=word1[i]
        }
        if(i<word2.length){
            str+=word2[i]
        }
  
    }
    return str
};