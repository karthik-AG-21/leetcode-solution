/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    return nums.filter(item => item%3 !== 0).length
    
};