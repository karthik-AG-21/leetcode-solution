/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let nums = String(n).split("").map((item)=>Number(item));
    let sum =1;

    for(let i = 0; i<nums.length; i++){
    sum = sum*nums[i];
    }

    total = nums.reduce((item ,sum)=>sum=sum+item,0);
    
    return sum - total
  
};