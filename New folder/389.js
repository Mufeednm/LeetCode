var findTheDifference = function(s, t) {
    let sA=0 ,sB=0;
    for (let i = 0; i < s.length; i++) {
     
     sA+= s.charCodeAt(i);
    }

    for (let i = 0; i < t.length; i++) {
        sB+= t.charCodeAt(i);
        
    }
        return String.fromCharCode(sB - sA)
};
let s=""
let t="y"
console.log(findTheDifference(s,t));