var findMedianSortedArrays = function(nums1, nums2) {
    const sort=num1.concat(num2).sort((a,b)=>a-b)
if (sort.length  % 2 ==0) {
    const middle= Math.floor((sort.length-1)/2)
    const ans =sort[middle] +sort[middle+1]
    return ans/2

}else{
   const middle= Math.floor(sort.length/2)
    const ans =sort[middle]
    return ans
} 

 
  

};
const num1= [1,2]
const num2=[3,4]
console.log(findMedianSortedArrays(num1,num2));