/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
   
    let res = nums.map((item)=>Math.abs(item)).sort((a,b)=>a-b)[0];

    if(nums.includes(res)){
        return res
    }else{
       return -res
    }
};