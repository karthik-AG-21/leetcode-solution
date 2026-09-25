/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    return nums.map((item)=>item.toString().split("").reduce((item,sum)=>sum = Number(sum) + Number(item),0)).sort((a,b)=>a-b)[0]

    
};