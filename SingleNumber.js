var singleNumber = function(nums) {
    let result = 0;
    for (const num of nums) {
        result ^= num;
    }
    return result;
};

// Example usage:
const nums = [2, 2, 55,5,1];
console.log(singleNumber(nums)); // Output: 1