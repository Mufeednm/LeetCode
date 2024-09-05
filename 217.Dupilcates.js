var containsDuplicate = function(nums) {
    const dupli = new Set();
    for (const ans of nums) {
        if (dupli.has(ans)) {
            return true; // Duplicate found
        }
        dupli.add(ans); // Add the number to the set
    }
    return false; // 
    }

const numsa =[1,2,3,1]
const numsb =[1,2,3,4]
const numsc =[1,1,1,3,3,4,3,2,4,2]
console.log(containsDuplicate(numsa)
);