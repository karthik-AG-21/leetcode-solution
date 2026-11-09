/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let res = []
    const newArray = new Set([...nums]);
    let count = 0;
    for(let i of newArray){
        res.push(i)
        count++
    }

    for(let i = 0; i<res.length; i++){
        nums[i] = res[i]
    }
    return count
};