var lengthOfLastWord = function(s) {
   
    const sup=s.trim().split(' ')
const lastword= sup[sup.length-1]
return lastword.length
};
const s = "Hello World"
console.log( lengthOfLastWord(s));