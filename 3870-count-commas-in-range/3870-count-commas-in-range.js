/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function(n) {
    
    if(n.toString().split("").length <=3 ){
        return 0
    }else if(n.toString().split("").length>=4){
       let num = n-1000;
        return num+1
    } 
};