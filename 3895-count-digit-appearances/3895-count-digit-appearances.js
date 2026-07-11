/**
 * @param {number[]} nums
 * @param {number} digit
 * @return {number}
 */
var countDigitOccurrences = function(nums, digit) {
    let count = 0;
    let array = nums.join("")
    array.split("").forEach((num)=>{
        if(num.includes(digit)){
            count++
        }
    })

    return count
};