var reduce = function(nums, fn, init) {
    let accumulator = init;
    for (let i = 0; i < nums.length; i++) {
        accumulator = fn(accumulator, nums[i]);
    }
    return accumulator;
};

const nums= [1,2,3,4]
const fn=function sum(accum, curr) { return accum + curr * curr; }
const init = 100
console.log(reduce(nums,fn,init));