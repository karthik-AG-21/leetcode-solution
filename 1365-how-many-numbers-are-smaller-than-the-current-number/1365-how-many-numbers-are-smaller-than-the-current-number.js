/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let numbers = [...nums]
    let array = [];
    for(let i = 0; i<nums.length;i++){
        let count = 0;
        for(let j = 0 ; j<nums.length;j++){
            if(nums[i]>numbers[j]){  
                count++
            }
        }
        array.push(count)
    }
    return array
};