var isPrefixOfWord = function(sentence, searchWord) {
    const a = sentence.split(" ")

for (let i = 0; i < a.length ; i++) {
 
    if (a[i].startsWith(searchWord) ) {
      return i+1
    }
}
return -1
};

const sentence="i love eating burger"
const searchWord="burg"
console.log(isPrefixOfWord(sentence,searchWord));