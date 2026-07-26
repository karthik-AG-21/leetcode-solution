/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    let n = nums.length;
   let num = nums.sort((a,b)=>a-b)

    return Math.max(num[n-1] * num[n-2] * num[n-3] , num[0] * num[1] * num[n-1])
};