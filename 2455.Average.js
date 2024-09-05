var averageValue = function(nums) {
    const a = nums.filter((num) => num % 2 === 0 && num % 3 === 0);
    
    if (a.length === 0) {
        return 0; 
    }
    return Math.floor( a.reduce((sum, num) => sum + num, 0) / a.length)
};
const nums =[94,65,82,40,79,74,92,84,37,19,16,85,20,79,25,89,55,67,84,3,79,38,16,44,2,54,58,94,69,71,14,24,13,21]
console.log(averageValue(nums)); 