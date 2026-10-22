/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    let obj = {};
    nums = nums.filter((item)=>item%2==0)
    
    for(let i = 0; i<nums.length; i++){
        if(!obj[nums[i]]){
            obj[nums[i]] = 1;
        }else{
            obj[nums[i]]++
        }
    }

    

    let res = Object.values(obj)
     res  = res.sort((a,b)=>b-a)
     res = res[0]

    let result  = Number(Object.keys(obj).find(k => obj[k] === res))
    if(!res){
        return -1
    }else{
        return result
    }
    
};