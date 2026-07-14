/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    let numbers = nums.filter((num)=>num<pivot)
    let equal = nums.filter((num)=>num == pivot)
    let largerNum =nums.filter((num)=>num > pivot)
   
    return [...numbers,...equal,...largerNum]
    
};