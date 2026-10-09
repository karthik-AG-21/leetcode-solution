/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
let count = 0,sum =0,total = n

    for(let i = 0; i<n; i++){
        if(total >1){
        count = Math.floor(total/2)
        total = Math.ceil(total/2)
         sum = sum + count;
         count = 0
        }  
    }
    return sum
};