/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
  
   let array = n.toString().split("").toSorted((a,b)=>b-a)
  return Number(array[0]) * Number(array[1]) 
   
  
};