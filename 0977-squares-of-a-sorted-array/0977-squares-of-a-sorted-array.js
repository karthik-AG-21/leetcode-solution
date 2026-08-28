/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let array = nums.map((item)=>item * item)

    return array.sort((a,b)=>a-b)
};