var reverseVowels = function(s) {
  let answer=""
  const ans =s.split("")
  const vowels =  ["a","e","i","o","u"] 
  for (let i = 0; i < ans.length; i++) {
    if (ans[i]==vowels[i]) {
      answer.push(vowels[i])
    }
    
  }
  return answer
};

const s= "IceCreAm"
console.log(reverseVowels(s));


