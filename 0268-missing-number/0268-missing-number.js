/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = 0;
    for(let i = 0; i<=nums.length;i++){
        if(!nums.includes(i)){
            n = i
        }
    }
    return n
};