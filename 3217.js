var modifiedList = function(nums, head) {
    const ans = head.filter(item => !nums.includes(item))
return ans 
};

const nums=[5]
const head = [1,2,3,4]
console.log(modifiedList(nums,head));