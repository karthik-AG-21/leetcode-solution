/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let n = Math.max(...nums);

    return nums.indexOf(n)
};