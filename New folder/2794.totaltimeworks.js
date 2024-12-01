var numberOfEmployeesWhoMetTarget = function(hours, target) {
   let ans =hours.filter((a)=>a>=target)
   return ans.length
   

};
const hours=[0,1,2,3,4]
const target =2
console.log(numberOfEmployeesWhoMetTarget(hours,target));