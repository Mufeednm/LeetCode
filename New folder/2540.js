var getCommon = function(nums1, nums2) {
    // const ans= nums1.filter(item=>nums2.includes(item))
    // if (ans.length===0) {return -1}
    // const answer =Math.min(...ans) 
    // return answer

    const nums2Set = new Set(nums2);

    const commonElements = nums1.filter(item => nums2Set.has(item));    
    if (commonElements.length === 0) {
        return -1;
    }
    return Math.min(...commonElements);
};

const nums1=[1,2,3,6]
const nums2=[2,3,4,5]
console.log(getCommon(nums1,nums2));