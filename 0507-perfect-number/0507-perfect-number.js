/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
   let n = num/2, array=[]
   for(let i = 1 ; i<=n;i++){
    if(num%i == 0){
        array.push(i)
    }
   }

   return array.reduce((sum , curr)=>sum = sum+curr,0) == num
};