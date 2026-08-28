/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let array = []
    for(let i = 0 ; i<nums.length; i++){
        if(nums[i]%2==0 && nums[i]%3==0){
            array.push(nums[i])
        }
    }
    
    if(array.length == 0){
        return 0
    }else{
    return Math.floor(array.reduce((sum , curr)=>sum = sum+curr , 0)/array.length)
    }
   
    

   
};