var buildArray = function(nums) {
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        ans[i] = nums[nums[i]];
    }
    return ans;

};
const nums = [5,0,1,2,3,4]
console.log(buildArray(nums));