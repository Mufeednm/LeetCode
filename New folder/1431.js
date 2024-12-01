var kidsWithCandies = function(candies, extraCandies) {
    const maxCandies = Math.max(...candies);
let ans =candies.map(candies=>(candies+extraCandies)>=maxCandies)

return ans 


};
const candies = [2,3,5,1,3]
const extraCandies=3
console.log(kidsWithCandies(candies,extraCandies));
// return candies.map(candy => (candy + extraCandies) >= maxCandies);