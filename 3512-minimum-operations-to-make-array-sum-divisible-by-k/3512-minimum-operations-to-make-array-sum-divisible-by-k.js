/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let sum = 0;
    let output =0;
    for(let i =0; i<nums.length; i++){
        sum=sum+nums[i]
       output = sum%k 

    }
      return output
    
};