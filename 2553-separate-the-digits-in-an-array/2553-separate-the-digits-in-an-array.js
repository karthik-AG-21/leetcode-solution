/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
   let n = nums.map((item)=>item.toString().split("")).flat()

   return n.map((item)=>Number(item))
};