/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let obj = {};
    for(let i = 0; i<nums.length; i++){
        if(!obj[nums[i]]){
            obj[nums[i]] =1
        }else{
            obj[nums[i]]++
        }
    }

    let array = Object.entries(obj).sort((a,b)=>b[1]-a[1]).map((item)=>Number(item[0]))[0]
   
    return array
    
};