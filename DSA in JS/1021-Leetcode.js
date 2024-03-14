/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let count=0
    let str=""
  for(let i=0;i<s.length;i++){
    if(count==0 && s[i]=="("){
        count++
    }else if(count>=1 && s[i]=="("){
        str+="("
        count++
    }else if(count>=2 && s[i]==")"){
        str+=")"
        count--
    }else if(count==1 && s[i]==")"){
        count--
    }else{
        continue;
    }
  }
  return str;
};