/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
   let array = nums.filter((item)=>item !== val);

   for(let i = 0; i<array.length; i++){
    nums[i] = array[i];
   }
   return array.length
};