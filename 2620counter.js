/**
 * @param {number} n
 * @return {Function} counter
 */
const createCounter = (n)=>()=>n++; 

 
  const counter = createCounter(10)
  counter() // 10
  counter() // 11
 counter() // 12
 console.log(counter());