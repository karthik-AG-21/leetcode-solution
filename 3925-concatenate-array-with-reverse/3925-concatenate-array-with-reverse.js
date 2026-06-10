/**
 * @param {number[]} nums
 * @return {number[]}
 */
var concatWithReverse = function(nums) {
    // let array = [];
    // for(let i = 0; i<nums.length; i++){
    //     array.push(nums[i])
    // }
    // for(let j = nums.length-1; j>=0; j--){
    //     array.push(nums[j])
    // }
    // return array;
    

    reverseNums = [...nums].reverse()
    return [...nums, ...reverseNums]
};