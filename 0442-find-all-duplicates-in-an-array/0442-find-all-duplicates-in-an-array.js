/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let obj = {};
    for(let i = 0; i<nums.length; i++){
        if(!obj[nums[i]]){
            obj[nums[i]] = 1;
        }else{
            obj[nums[i]]++;
        }
    }
    let array = Object.entries(obj).filter((item)=>item[1] >=2).map((item)=>Number(item[0]))
    return array
    
};