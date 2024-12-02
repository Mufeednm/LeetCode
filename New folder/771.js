var numJewelsInStones = function(jewels, stones) {
    const stonesplt=stones.split("")
    const jewelsplit=jewels.split("")
    let ans =0
for (let i = 0; i < jewelsplit.length; i++) {

    for (let j = 0; j < stonesplt.length; j++) {
       if (jewelsplit[i]===stonesplt[j]) {
        ans ++
       }
        
    }
  
    
}
return ans
};
const jewels="aA"
const stones="aAAbbbb"
console.log( numJewelsInStones(jewels,stones)
);

