/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
   let n = nums.indexOf(target);
   if(n>=0){
    return true 
   }else{
    return false
   }
};