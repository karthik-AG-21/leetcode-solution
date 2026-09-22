/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let obj = {};

    for(let i = 0; i<nums.length; i++){
        if(obj[nums[i]]){
            obj[nums[i]]++
        }else{
            obj[nums[i]] = 1
        }
    }
    let array = Object.entries(obj).filter((item)=>item[1] == 1);


   let res = array.map((item)=>Number(item[0]))
   return res.reduce((curr,sum)=>sum = sum+curr ,0)
};