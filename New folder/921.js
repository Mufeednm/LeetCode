var minAddToMakeValid = function(s) {
    let count =0
 for (let i = 0; i < s.length; i++) { 
    for (let j = i+1; j < s.length; j++) {
        
    if (s[i]=="(" && s[j]==")") {
        return 0
    }
count ++
    }

    
 }
 return count
};
const s = "))()"
console.log(minAddToMakeValid(s));



let count1 =0
let count2 =0

for (let i = 0; i < s.length; i++) { 

    
if (s[i]=="(") {
count1++
}else if (s[i]==")") {
if (count1>0) {
    
    count1--
}   else{
    count2++
}
}

}



return count1+count2