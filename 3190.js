var minimumOperations = function(nums) {
    let operations = 0;
    for (let num of nums) {
        const remainder = num % 3;
        if (remainder === 1) {
            operations += 1;
        } else if (remainder === 2) {
            operations += 1;        }
    }
    return operations;
};


const nums=[1,2,3,4]
console.log(minimumOperations(nums));