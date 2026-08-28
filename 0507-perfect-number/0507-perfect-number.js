/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
   let n = num/2, sum = 0
   for(let i = 1 ; i<=n;i++){
    if(num%i === 0){
        sum = sum + i
    }
   }

   return num === sum


};