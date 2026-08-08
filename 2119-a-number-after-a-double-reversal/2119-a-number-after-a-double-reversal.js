/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
   let reversed1 = Number(num.toString().split("").reverse().join(""))
   
    reversed2 = Number(reversed1.toString().split("").reverse().join(""))
    

    if(num === reversed2){
        return true 
    }else{
        return false
    }
};