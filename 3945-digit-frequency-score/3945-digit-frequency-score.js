/**
 * @param {number} n
 * @return {number}
 */
var digitFrequencyScore = function(n) {
    return n.toString().split("").reduce((sum , item)=>sum = sum+Number(item),0)
    
};