var shuffle = function(nums, n) {
    const split = nums.splice(0,n)
    const result =[]
for (let index = 0; index < nums.length; index++) {
   if (index<split.length) {
    result.push(split[index])
   }
    if (index<nums.length) {
        result.push(nums[index])
    }
}
return result
};

const nums=[1,2,3,4,4,3,2,1]
const n = 4
console.log(shuffle(nums,n));