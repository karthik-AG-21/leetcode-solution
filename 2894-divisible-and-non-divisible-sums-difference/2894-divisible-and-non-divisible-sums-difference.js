/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let array1=[],array2=[];
    for(let i = 1; i<=n; i++ ){
        if(i%m !== 0){
            array1.push(i)
        }else{
            array2.push(i)
        }
    }

   let sum1 = array1.reduce((sum , curr)=>sum = sum+curr ,0)
   let sum2 = array2.reduce((sum , curr)=>sum = sum+curr ,0)

   return sum1-sum2


};