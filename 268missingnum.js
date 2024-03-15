var missingNumber = function(nums) {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2; // Sum of first n natural numbers
    const actualSum = nums.reduce((acc, num) => acc + num, 0);
    return expectedSum - actualSum;
};

// Example usage:
const nums = [3, 0, 1];
console.log(missingNumber(nums)); // Output: 2