var differenceOfSums = function(n, m) {
    const a =[]
    const b=[]
    for (let i = 1; i <= n; i++) {
       if (i % m!==0) {a.push(i) }
      else{
        b.push(i)
      }
    
    }
const ans = a.reduce((a,b)=>a+b,0)-b.reduce((a,b)=>a+b,0)

return ans
};

const n=5
const m = 1
console.log(differenceOfSums(n,m));