var plusOne = function(digits) {
  
    let result = parseInt(digits.join('')) + 1;  
    let ans = result.toString().split('').map(Number); 
    return ans  
    
};
const digits =[1,2,3]
console.log(plusOne(digits));