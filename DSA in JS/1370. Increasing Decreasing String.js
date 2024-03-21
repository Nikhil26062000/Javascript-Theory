/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
 
    const arr = new Array(26).fill(0);
    for(let i=0;i<s.length;i++){
        arr[s[i].charCodeAt(0)-"a".charCodeAt(0)]++
    }

    let res=""
    while(res.length<s.length){
        for(let i=0;i<26;i++){
            if(arr[i]>0){
                res+=String.fromCharCode(i+"a".charCodeAt(0))
            }
            arr[i]--
        }

        for(let i=25;i>=0;i--){
            if(arr[i]>0){
                res+=String.fromCharCode(i+"a".charCodeAt(0))
            }
            arr[i]--
        }
        
    }
    return res

};