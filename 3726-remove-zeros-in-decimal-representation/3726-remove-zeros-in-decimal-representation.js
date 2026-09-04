/**
 * @param {number} n
 * @return {number}
 */
var removeZeros = function(n) {
   if(!n.toString().split("").includes("0")){
    return n
   }else{
    return Number(n.toString().split("").filter((item)=>item!="0").join(""))
   }
};