Array.prototype.last = function() {

    

    
    const a = this[this.length - 1];
    if (typeof a!=="") {
        return -1
    }else{
    return a;
    }
};




const arr = [null]
console.log(arr.last()); // Output: 3

/**
 * arr.last(); // 3
 */