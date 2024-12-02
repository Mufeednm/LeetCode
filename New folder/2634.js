var filter = function(arr, fn) {
    let ans = []
    for (let i = 0; i < arr.length; i++) {
  if (fn(arr[i],i)) {
    ans.push(arr[i])
  }
    }
    return ans
};


const fn= function firstIndex(n, i) { return i === 0; }
const arr =[1,2,3]
console.log(filter(arr,fn));