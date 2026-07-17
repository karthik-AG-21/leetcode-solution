/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    let array = []
    nums.sort((a,b)=>a-b)
    for(let i = nums[0]; i<nums[nums.length-1]; i++){
        if(!nums.includes(i)){
            array.push(i)
        }
    }

    return array
   
};