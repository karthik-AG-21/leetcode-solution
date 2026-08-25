/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingMultiple = function(nums, k) {
    for(let i = 1; i<=101; i++){
       console.log(k*i)
        if(!nums.includes(k*i)){
            return k*i
        }
    }
};