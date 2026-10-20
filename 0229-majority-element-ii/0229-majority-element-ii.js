/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let obj = {};
    let n = nums.length/3

    for(let i =0 ; i<nums.length; i++){
        if(!obj[nums[i]]){
            obj[nums[i]] = 1
        }else{
            obj[nums[i]]++
        }
    }
    let res = Object.entries(obj).filter((item)=>item[1]>n).map((item)=>Number(item[0]))

    return res
};