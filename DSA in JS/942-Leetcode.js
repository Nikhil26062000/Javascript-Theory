/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    const n = s.length;
   let result = [];
   let low = 0;
   let high = n;

   for (let i = 0; i <= n; i++) {
       if (s[i] === 'I') {
           result.push(low);
           low++;
       } else {
           result.push(high);
           high--;
       }
   }

   return result;
  
 };