/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
   
    if(nums.includes(target)){
        return nums.indexOf(target)
    }else if(!nums.includes(target) && nums[nums.length-1] <= target ){
        return nums.length
    }

    for(let i = 0; i<nums.length; i++){
        if(!nums.includes(target) && nums[i] > target ){
            return i
        }
    }

   
};