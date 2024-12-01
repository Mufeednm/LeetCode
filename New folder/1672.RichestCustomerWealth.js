var maximumWealth = function(accounts) {
    let ans =[]
    for (let i = 0; i < accounts.length; i++) {

    if (accounts[i]) {
    ans.push(  accounts[i].reduce((a,b)=> a+b)
        )
    }
    
}
return Math.max(...ans) 
};
const accounts=[[1,2,3,1],[3,2,7]]

console.log(maximumWealth(accounts));


