var mergeAlternately = function(word1, word2) {
   let ans =""
   const max= Math.max(word1.length,word2.length)
    for (let i = 0; i < max; i++) {
       if (i<word1.length) {ans += word1[i] }
       if (i<word2.length) {ans += word2[i]}}  
    return ans
};
const word1 ="abc"
const word2="pqr"
console.log(mergeAlternately(word1,word2));