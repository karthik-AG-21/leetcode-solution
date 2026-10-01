/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let array = String(num).split("").map((item)=>Number(item))
   
    let count = 0;

    if(String(num).length===1){
        return 1
    }else{
        for(let i = 0; i<array.length; i++){
            if(num % array[i] === 0){
                count++   
            }
        }
    }
    return count
};