/**
 * @param {number} n
 * @return {number}
 */
var gcdOfOddEvenSums = function(n) {
    let oddSum = 1 , evenSum=2 , odd = 1 ,even = 2 ;
    for(let i = 1; i<n; i++){
        odd = odd+2
        oddSum = oddSum+odd 
        even = even+2
        evenSum = evenSum + even
        
    }
    return evenSum - oddSum
   
};