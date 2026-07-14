/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    

    let smallest = [];
    let equal = [];
    let largerNum = []

    for(let i = 0; i<nums.length; i++){
        if(nums[i]<pivot){
            smallest.push(nums[i])
        }else if(nums[i]==pivot){
            equal.push(nums[i])
        }else{
            largerNum.push(nums[i])

        }
    }

   
    return [...smallest,...equal,...largerNum]
    
};