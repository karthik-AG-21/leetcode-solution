/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    
   let array =  nums.filter((item)=>item.toString().split("").length!=1)
   
   let singleNum = nums.filter((item)=>item.toString().split("").length===1)

   let sum1 = singleNum.reduce((item,sum)=>sum = sum+item,0)

   let sum2 = array.reduce((item,sum)=>sum = sum+item,0)

   if(sum1 !== sum2){
    return true
   }else{
    return false
   }

};