const reverseString=(word)=>{
let ans = ""
for (let i =word.length-1;i>=0; i--) {
  ans +=(word[i])
  
}
return ans

}
const word="mufeed"
console.log(reverseString(word));