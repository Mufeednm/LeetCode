var findWordsContaining = function(words, x) {


const ans = [];
for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) { 
        ans.push(i);  
    }
}
return ans;
};

const words =["leet","code"]
const x = "e"
console.log(findWordsContaining(words,x));